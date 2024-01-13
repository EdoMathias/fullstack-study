import { IProductService } from './IProductService';
import db from '../../db/db.json';
import { Prodcut } from '../../models/product-model';

class productLocaldbService implements IProductService {
  async getProducts(): Promise<Prodcut[]> {
    return db.products;
  }

  async getProduct(id: number): Promise<Prodcut | undefined> {
    const product = db.products.find((product) => product.id === id);
    console.log(product);

    if (product) {
      return product;
    } else {
      throw new Error('Coult not fine product');
    }
  }

  async createProduct(product: Prodcut): Promise<Prodcut> {
    db.products.push(product);
    return product;
  }

  async editProduct(product: Prodcut): Promise<Prodcut> {
    const currentProduct = db.products.find((p) => p.id === product.id);
    if (currentProduct) {
      currentProduct.title = product.title;
      currentProduct.price = product.price;
      currentProduct.description = product.description;
      currentProduct.category = product.category;
      currentProduct.image = product.image;
      currentProduct.rating = product.rating;
    } else {
      throw new Error('Product not found');
    }
    return currentProduct;
  }

  async deleteProduct(id: number): Promise<void> {
    console.log(id);

    const productIndex = db.products.findIndex((product) => product.id === id);
    console.log(productIndex);

    if (productIndex >= 0) {
      db.products.splice(productIndex, 1);
      console.log(db.products);
    } else {
      throw new Error(`Product ${id} not found`);
    }

    return;
  }
}

export default new productLocaldbService();
