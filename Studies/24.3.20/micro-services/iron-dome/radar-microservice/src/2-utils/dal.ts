import { appConfig } from './app-config';
import mongoose from 'mongoose';

// DAL = Data Access Layer - The only one accessing the database.
class DAL {
  public async connect(): Promise<void> {
    try {
      const db = await mongoose.connect(appConfig.mongodbConnectionString);
      console.log("We're connected to " + db.connections[0].name);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}

export const dal = new DAL();
