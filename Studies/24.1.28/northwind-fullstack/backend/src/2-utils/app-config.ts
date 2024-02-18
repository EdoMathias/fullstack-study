import dotenv from 'dotenv';

// Loads ".env" file into process.env object:
dotenv.config();

class AppConfig {
  public readonly port = process.env.PORT;
  public readonly mySqlHost = process.env.MYSQL_HOST;
  public readonly mySqlUser = process.env.MYSQL_USER;
  public readonly mySqlPassword = process.env.MYSQL_PASSWORD;
  public readonly mySqlDatabase = process.env.MYSQL_DATABASE;
  public readonly jwtSecretKey = process.env.JWT_SECRET_KEY;
  public readonly baseImageUrl = process.env.BASE_IMAGE_URL;
  public readonly passwordSalt = process.env.PASSWORD_SALT;
}

export const appConfig = new AppConfig();
