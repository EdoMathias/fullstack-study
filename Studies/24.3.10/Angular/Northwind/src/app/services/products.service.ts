import { ProductModel } from '../models/product.model';
import { appConfig } from '../app.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  // Where to create an object
  providedIn: 'root', // root = create a single object for entire app
})
export class ProductsService {
  public constructor(private http: HttpClient) {}

  public async getAllProducts(): Promise<ProductModel[]> {
    const observable = this.http.get<ProductModel[]>(appConfig.productsUrl);
    const products = await firstValueFrom(observable);
    return products;
  }

  public async getProductById(id: number): Promise<ProductModel> {
    const observable = this.http.get<ProductModel>(appConfig.productsUrl + id);
    const product = await firstValueFrom(observable);
    return product;
  }

  public async addProduct(product: ProductModel): Promise<void> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('stock', product.stock.toString());
    formData.append('image', product.image);
    const observable = this.http.post<ProductModel>(
      appConfig.productsUrl,
      formData
    );
    await firstValueFrom(observable);
  }

  public async deleteProduct(id: number): Promise<void> {
    const observable = this.http.delete(appConfig.productsUrl + id);
    await firstValueFrom(observable);
  }

  public async updateProduct(product: ProductModel): Promise<void> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('stock', product.stock.toString());
    formData.append('image', product.image);
    const observable = this.http.put<ProductModel>(
      appConfig.productsUrl + product.id,
      formData
    );
    await firstValueFrom(observable);
  }

  private getFormData(product: ProductModel) {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('stock', product.stock.toString());
    formData.append('image', product.image);
    return formData;
  }
}
