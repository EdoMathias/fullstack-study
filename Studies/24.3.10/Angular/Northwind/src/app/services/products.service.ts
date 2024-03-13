import { ProductModel } from '../models/product.model';
import { appConfig } from '../app.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  // Where to create an object
  providedIn: 'root', // root = create a single object for entire app
})
export class ProductsService {
  public constructor(private http: HttpClient) {}

  public async getAllProducts(): Promise<ProductModel[]> {
    const observable = this.http.get<ProductModel[]>(appConfig.productsUrl);
    const products = await observable.toPromise();
    return products;
  }

  public async getProductById(id: number): Promise<ProductModel> {
    const observable = this.http.get<ProductModel>(appConfig.productsUrl + id);
    const product = await observable.toPromise();
    return product;
  }
}
