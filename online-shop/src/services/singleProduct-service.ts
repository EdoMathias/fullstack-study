import axios from 'axios';
import { Product } from '../types/types';

const productsUrl = 'http://localhost:3000/products';

export const getSingleProduct = async (productId: string) => {
  try {
    const result = await axios.get<Product[]>(`${productsUrl}?id=${productId}`);
    const product = result.data;
    return product;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('Failed fetching product' + error.response?.statusText);
    }
  }
};

export const createProduct = async (product: Product) => {
  try {
    await axios.post(productsUrl, product);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.statusText);
    }
    throw error;
  }
};
