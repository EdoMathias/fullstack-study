import axios from 'axios';
import { Category } from '../types/types';
import { api } from '../utils/api';

// const getCategoriesUrl = 'http://localhost:3000/categories';
const categoriesParameter = '/categories';

export const getCategories = async (): Promise<Category[]> => {
  try {
    // const result = await axios.get<Category[]>(getCategoriesUrl);
    const result = await api.get<Category[]>(categoriesParameter);
    const categories = result.data;
    return categories;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        'Failed fetching categories' + error.response?.statusText
      );
    }
    throw error;
  }
};
