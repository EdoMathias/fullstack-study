import { dal } from '../2-utils/dal';
import { ProductModel } from '../3-models/product-model';

class ProductsService {
  public async getAllProducts(): Promise<ProductModel[]> {
    const sql = 'SELECT * FROM products';
    const products = await dal.exceute(sql);
    return products;
  }
}

export const productsService = new ProductsService();
