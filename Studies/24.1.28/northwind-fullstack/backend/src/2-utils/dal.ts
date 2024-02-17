import mysql, { QueryError } from 'mysql2';
import { appConfig } from './app-config';

class DAL {
  private readonly connection = mysql.createPool({
    host: appConfig.mySqlHost,
    user: appConfig.mySqlUser,
    password: appConfig.mySqlPassword,
    database: appConfig.mySqlDatabase,
  });

  // Executing an sql query on the database
  public exceute(sql: string) {
    return new Promise<any>((resolve, reject) => {
      this.connection.query(sql, (error: QueryError, result: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export const dal = new DAL();
