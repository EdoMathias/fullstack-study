import { UserModel } from '../3-models/user-model';
import jwt, { SignOptions } from 'jsonwebtoken';
import { appConfig } from './app-config';
import { RoleModel } from '../3-models/role-model';

class Cyber {
  // Create new token
  public getNewToken(user: UserModel): string {
    // Crete container for the user:
    const container = {
      user,
    };

    // Secret Key:
    const secretKey = 'Make things go right!';

    // Options:
    const options: SignOptions = { expiresIn: '5h' };

    const token = jwt.sign(container, secretKey, options);

    // auth
    return token;
  }

  // Validate token:
  public isTokenValid(token: string): boolean {
    try {
      // If no token sent:
      if (!token) {
        return false;
      }

      // Verify token (throw if not valid)
      jwt.verify(token, appConfig.jwtSecretKey);

      // All is good
      return true;
    } catch (error) {
      return false;
    }
  }

  // Validate Admin
  public isAdmin(token: string): boolean {
    // Extract container:
    const container = jwt.decode(token) as { user: UserModel }; // casting

    // Extract user:
    const user = container.user;

    // Return true if user is admin or false if user is not admin:
    return user?.roleId === RoleModel.Admin;
  }
}

export const cyber = new Cyber();
