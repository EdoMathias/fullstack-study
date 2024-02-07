import { UserModel } from "../3-models/user-model";
import jwt, { SignOptions } from 'jsonwebtoken'

class Cyber {

    // Create new token
  public getNewToken(user: UserModel):string {
    
    // Crete container for the user:
    const container = {
        user
    }; 

    // Secret Key:
    const secretKey = 'Make things go right ';

    // Options:
    const options: SignOptions = { expiresIn: "5h" };

    const token = jwt.sign(container, secretKey, options);

    // auth
    return token;
  }
}

export const cyber = new Cyber();
