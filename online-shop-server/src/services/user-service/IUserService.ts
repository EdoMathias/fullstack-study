import { User } from '../../models/user-model';

export interface IUserService {
  getUsers(): Promise<User[]>;
  getUser(id: string): Promise<User | undefined>;
  createUser(user: User): Promise<User>;
  editUser(user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
}
