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

  // Get one product:
  public async getOneVacation(id: number): Promise<VacationModel> {
    // Get all vacations from global state:
    let vacations = appStore.getState().vacations;

    // Find the desired product:
    let product = vacations.find((p) => p.id === id);

    // If we have that product in the global state - return it:
    if (product) return product;

    // Get that product from the backend:
    const response = await axios.get<VacationModel>(
      appConfig.vacationsUrl + id
    );

    // Extract the product from the response:
    product = response.data;

    // Return the product:
    return product;
  }

  // Add product:
  public async addVacation(product: VacationModel): Promise<void> {
    // Add the new product to backend:
    const response = await axios.post<VacationModel>(
      appConfig.vacationsUrl,
      product,
      appConfig.axiosOptions
    );

    // Extract the added product from the response:
    const addedProduct = response.data;

    // Create action for adding a product to the global state:
    const action = vacationsActionCreators.addOne(addedProduct);

    // Send action to global state:
    appStore.dispatch(action);
  }

  // Update product:
  public async updateVacation(product: VacationModel): Promise<void> {
    // Send the update to backend:
    const response = await axios.put<VacationModel>(
      appConfig.vacationsUrl + product.id,
      product,
      appConfig.axiosOptions
    );

    // Extract the updated product from the backend:
    const updatedProduct = response.data;

    // Create action for updating a product in the global state:
    const action = vacationsActionCreators.updateOne(updatedProduct);

    // Send action to global state:
    appStore.dispatch(action);
  }

  // Delete product:
  public async deleteVacation(id: number): Promise<void> {
    // Delete product from backend:
    await axios.delete(appConfig.vacationsUrl + id);

    // Create action for deleting a product from the global state:
    const action = vacationsActionCreators.deleteOne(id);

    // Send action to global state:
    appStore.dispatch(action);
  }
}

export const vacationService = new VacationService();
