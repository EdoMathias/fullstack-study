import axios from 'axios';
import { SignedUser, User } from '../types/user';

const baseUrl = 'http://localhost:3000';

export const signUp = async (user: User) => {
  try {
    const result = await axios.post(`${baseUrl}/signup`, user);
    console.log(result.data);
    if (result.data.accessToken) {
      localStorage.setItem('token', result.data.accessToken);
    }
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw error;
  }
};

export const signIn = async (user: SignedUser) => {
  try {
    const result = await axios.post(`${baseUrl}/signin`, user);
    console.log(result.data);
    if (result.data.accessToken) {
      localStorage.setItem('token', result.data.accessToken);
    }
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw error;
  }
};

export const editUser = async (user: User) => {
  try {
    const result = await axios.put(`${baseUrl}/signup`, user);
    console.log(result.data);
    if (result.data.accessToken) {
      localStorage.setItem('token', result.data.accessToken);
    }
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw error;
  }
};

export const signOut = () => {
  try {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    return;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    }
    throw error;
  }
};
