import { OkPacketParams } from 'mysql2';
import { dal } from '../2-utils/dal';
import { UserModel } from '../3-models/user-model';
import { RoleModel } from '../3-models/role-model';
import { cyber } from '../2-utils/cyber';

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
}

export const authService = new AuthService();
