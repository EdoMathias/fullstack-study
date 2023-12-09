import axios from 'axios';
import { Product } from '../types/types';

const getSingleProductUrl = 'http://localhost:3000/products';

export const getSingleProduct = async (productId: string) => {
  try {
    const result = await axios.get<Product[]>(
      `${getSingleProductUrl}?id=${productId}`
    );
    const product = result.data;
    return product;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('Failed fetching product' + error.response?.statusText);
    }
  }
};
