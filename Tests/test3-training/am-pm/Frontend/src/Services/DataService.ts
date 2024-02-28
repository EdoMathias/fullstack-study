import axios from 'axios';
import { CategoryModel } from '../Models/category-model';
import { appConfig } from '../Utils/AppConfig';
import { ProductModel } from '../Models/product-model';

class DataService {
  public async getAllCategories(): Promise<CategoryModel[]> {
    const response = await axios.get<CategoryModel[]>(appConfig.categoriesUrl);
    const categories = response.data;
    return categories;
  }
  public async getProductsByCategories(
    categoryId: number
  ): Promise<ProductModel[]> {
    const response = await axios.get<ProductModel[]>(
      appConfig.productsByCategoryUrl + categoryId
    );
    const products = response.data;
    return products;
  }
  public async getProductById(productId: number): Promise<ProductModel> {
    const response = await axios.get<ProductModel[]>(
      appConfig.productsUrl + productId
    );
    const products = response.data;
    const product = products[0];
    return product;
  }
  public async addProduct(product: ProductModel): Promise<void> {
    const response = await axios.post<ProductModel>(
      appConfig.productsUrl,
      product,
      appConfig.axiosOptions
    );
    const addedProduct = response.data;
    console.log('Product added: ', addedProduct);
  }

  public async editProduct(product: ProductModel): Promise<void> {
    await axios.put<ProductModel>(
      appConfig.productsUrl + product.id,
      product,
      appConfig.axiosOptions
    );
  }

  public async deleteProduct(productId: number): Promise<void> {
    await axios.delete(appConfig.productsUrl + productId);
  }
}

export const dataService = new DataService();
