import { OkPacketParams } from 'mysql2';
import { dal } from '../2-utils/dal';
import { UserModel } from '../3-models/user-model';
import { RoleModel } from '../3-models/role-model';
import { cyber } from '../2-utils/cyber';
import { CredentialsModel } from '../3-models/credentials-model';
import { UnauthorizedError } from '../3-models/client-errors';

class AuthService {
  public async register(user: UserModel): Promise<string> {
    user.roleId = RoleModel.User;
    // Create sql:
    const sql = `INSERT INTO users(firstName, lastName, email, password, roleId)
            VALUES('${user.firstName}','${user.lastName}','${user.email}','${user.password}',${user.roleId})`;

    // Execute:
    const info: OkPacketParams = await dal.exceute(sql);

    // Set back id:
    user.id = info.insertId;

    const token = cyber.getNewToken(user);


    // Return user
    return token;
  }


  public async login(credentials: CredentialsModel): Promise<string> {

    // Create sql: 
    const sql = `SELECT * FROM users WHERE
     email = '${credentials.email}' AND password = '${credentials.password}'`;

    const users = await dal.exceute(sql);

    const user = users[0];

    if (!user) {
      throw new UnauthorizedError("Incorrect email or password")
    }

    const token = cyber.getNewToken(user);


    // Return user
    return token;
  }
}

export const authService = new AuthService();
