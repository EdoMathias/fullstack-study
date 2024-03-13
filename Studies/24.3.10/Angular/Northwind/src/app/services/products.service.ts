import axios from 'axios';
import { ProductModel } from '../models/product.model';
import { appConfig } from '../app.config';
import { Injectable } from '@angular/core';

@Injectable({
  // Where to create an object
  providedIn: 'root', // root = create a single object for entire app
})
export class ProductsService {
  public async getAllProducts(): Promise<ProductModel[]> {
    const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
    const products = response.data;
    return products;
  }
}
