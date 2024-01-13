import axios from 'axios';
import { Category } from '../types/types';

const getCategoriesUrl = 'http://localhost:3000/categories';

export const getCategories = async (): Promise<Category[]> => {
  try {
    const result = await axios.get<Category[]>(getCategoriesUrl);
    const categories = result.data;
    return categories;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        'Failed fetching categories' + error.response?.statusText,
      );
    }
    throw error;
  }
};
