import axios from 'axios';
import { SignedUser, User } from '../types/user';

const baseUrl = 'http://localhost:3000';

export const signUp = async (user: User) => {
  try {
    const result = await axios.post(`${baseUrl}/signup`, user);
    console.log(result.data);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.statusText);
    }
    throw error;
  }
};

export const signIn = async (user: SignedUser) => {
  try {
    const result = await axios.post(`${baseUrl}/signin`, user);
    console.log(result.data);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.statusText);
    }
    throw error;
  }
};
