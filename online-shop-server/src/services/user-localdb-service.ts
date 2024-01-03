import { User } from '../models/user-model';
import db from '../db/db.json';
import { IUserService } from './IUserService';

class userLocaldbService implements IUserService {
  async getUsers(): Promise<User[]> {
    return db.users;
  }

  async getUser(id: string): Promise<User | undefined> {
    const user = db.users.find((user) => user.id === id);
    console.log(user);

    if (user) {
      return user;
    } else {
      throw new Error('Could not find user');
    }
  }

  async createUser(user: User): Promise<User> {
    // TODO: create userId;
    db.users.push(user);
    return user;
  }

  async editUser(user: User): Promise<User> {
    const currentUser = db.users.find((u) => u.id === user.id);
    if (currentUser) {
      currentUser.firstName = user.firstName;
      currentUser.lastName = user.lastName;
      currentUser.email = user.email;
    } else {
      throw Error('User not found');
    }
    return currentUser;
  }

  async deleteUser(id: string): Promise<void> {
    const userIndex = db.users.findIndex((index) => index.id === id);
    db.users.splice(userIndex, 1);
    return;
  }
}

export default new userLocaldbService();
