import axios from 'axios';
import VacationModel from '../Models/VacationModel';
import { appConfig } from '../Utils/AppConfig';
import { appStore } from '../Redux/Store';
import {
  vacationsActionCreators,
  vacationsReducersContainer,
} from '../Redux/VacationsSlice';
import { authActionCreators, authReducersContainer } from '../Redux/AuthSlice';

class VacationService {
  // Get all vacations from backend:
  public async getAllVacations(): Promise<VacationModel[]> {
    // Get all vacations from global state:
    let vacations = appStore.getState().vacations;
    let user = appStore.getState().user;

    // If we have the vacations in the global state - return them:
    if (vacations.length > 0) return vacations;

    // Get all vacations from backend:
    const response = await axios.get<VacationModel[]>(
      appConfig.vacationsByUserUrl + user.id
    );

    // Extract vacations from the response:
    vacations = response.data;

    // Create action for init all vacations:
    const action = vacationsActionCreators.initAll(vacations);

    // Send action to global state:
    appStore.dispatch(action);

    // Return vacations to the component:
    return vacations;
  }

  // Get one vacation:
  public async getOneVacation(id: number): Promise<VacationModel> {
    // Get all vacations from global state:
    let vacations = appStore.getState().vacations;

    // Find the desired vacation:
    let vacation = vacations.find((p) => p.id === id);

    // If we have that vacation in the global state - return it:
    if (vacation) return vacation;

    // Get that vacation from the backend:
    const response = await axios.get<VacationModel>(
      appConfig.vacationsUrl + id
    );

    // Extract the vacation from the response:
    vacation = response.data;

    // Return the vacation:
    return vacation;
  }

  // Add vacation:
  public async addVacation(vacation: VacationModel): Promise<void> {
    // Add the new vacation to backend:
    const response = await axios.post<VacationModel>(
      appConfig.vacationsUrl,
      vacation,
      appConfig.axiosOptions
    );

    // Extract the added vacation from the response:
    const addedProduct = response.data;

    // Create action for adding a vacation to the global state:
    const action = vacationsActionCreators.addOne(addedProduct);

    // Send action to global state:
    appStore.dispatch(action);
  }

  // Update vacation:
  public async updateVacation(vacation: VacationModel): Promise<void> {
    // Send the update to backend:
    const response = await axios.put<VacationModel>(
      appConfig.vacationsUrl + vacation.id,
      vacation,
      appConfig.axiosOptions
    );

    // Extract the updated vacation from the backend:
    const updatedProduct = response.data;

    // Create action for updating a vacation in the global state:
    const action = vacationsActionCreators.updateOne(updatedProduct);

    // Send action to global state:
    appStore.dispatch(action);
  }

  // Delete vacation:
  public async deleteVacation(id: number): Promise<void> {
    // Delete vacation from backend:
    await axios.delete(appConfig.vacationsUrl + id);

    // Create action for deleting a vacation from the global state:
    const action = vacationsActionCreators.deleteOne(id);

    // Send action to global state:
    appStore.dispatch(action);
  }
}

export const vacationService = new VacationService();
