import axios from 'axios';
import UserModel from '../Models/UserModel';
import { appConfig } from '../Utils/AppConfig';
import { jwtDecode } from 'jwt-decode';
import { appStore } from '../Redux/Store';
import { authActionCreators } from '../Redux/AuthSlice';
import CredentialsModel from '../Models/CredentialsModel';
import { vacationsActionCreators } from '../Redux/VacationsSlice';

class AuthService {
  // Constructor:
  public constructor() {
    // Get token from local storage:
    const token = localStorage.getItem('token');

    // If exists:
    if (token) {
      // Extract the user from the token:
      const loggedInUser = jwtDecode<{ user: UserModel }>(token).user;

      // Update global state:
      appStore.dispatch(authActionCreators.login(loggedInUser));
    }
  }

  // Register a new user:
  public async register(user: UserModel): Promise<void> {
    // Send the new user to backend:
    const response = await axios.post<string>(appConfig.registerUrl, user);

    // Extract the JWT token:
    const token = response.data;

    // Extract the user from the token:
    const registeredUser = jwtDecode<{ user: UserModel }>(token).user;

    // Update global state:
    appStore.dispatch(authActionCreators.register(registeredUser));

    // Save the token in the local storage:
    localStorage.setItem('token', token);
  }

  // Login existing user:
  public async login(credentials: CredentialsModel): Promise<void> {
    // Send the credentials to backend:
    const response = await axios.post<string>(appConfig.loginUrl, credentials);

    // Extract the JWT token:
    const token = response.data;

    // Extract the user from the token:
    const loggedInUser = jwtDecode<{ user: UserModel }>(token).user;

    // Update global state:
    appStore.dispatch(authActionCreators.login(loggedInUser));

    // Save the token in the local storage:
    localStorage.setItem('token', token);
  }

  // Logout:
  public logout(): void {
    // Update global state:
    appStore.dispatch(authActionCreators.logout());

    appStore.dispatch(vacationsActionCreators.resetState());

    // Remove token from local storage:
    localStorage.removeItem('token');
  }
}

export const authService = new AuthService();
