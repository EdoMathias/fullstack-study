import axios from 'axios';
import { Product } from '../types/types';

const getProductsUrl = 'http://localhost:3000/products';

export const getProductsByCategoryId = async (categoryId: string) => {
  try {
    const result = await axios.get<Product[]>(
      `${getProductsUrl}?categoryId=${categoryId}`
    );
    const products = result.data;
    return products;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('Failed fetching products' + error.response?.statusText);
    }
  }
};
