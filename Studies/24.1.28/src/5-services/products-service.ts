import { OkPacketParams } from 'mysql2';
import { dal } from '../2-utils/dal';
import { ProductModel } from '../3-models/product-model';
import { NextFunction } from 'express';
import { ResourceNotFoundError } from '../3-models/client-errors';

class ProductsService {
  public async getAllProducts(): Promise<ProductModel[]> {
    const sql = 'SELECT * FROM products';
    const products = await dal.exceute(sql);
    return products;
  }

  public async getProductById(id: number): Promise<ProductModel> {
    const sql = 'SELECT * FROM products WHERE id = ' + id;

    // dal.execute always returns an array from the DB
    const products = await dal.exceute(sql);

    // Extract the single product
    const product = products[0];

    // if product does not exist
    if (!product) {
      throw new ResourceNotFoundError(id);
      // next(error);
    }

    return product;
  }

  // Add new product:
  public async addProduct(product: ProductModel): Promise<ProductModel> {
    const sql = `INSERT INTO products(name, price, stock) 
      VALUES('${product.name}', ${product.price}, ${product.stock})`;
    const info: OkPacketParams = await dal.exceute(sql);

    // Set back the auto incremented id to the product
    product.id = info.insertId;

    return product;
  }

  // Update product:
  public async updateProduct(product: ProductModel): Promise<ProductModel> {
    const sql = `UPDATE products SET
      name = '${product.name}',
      price = ${product.price},
      stock = ${product.stock}
      WHERE id = ${product.id}`;

    const info: OkPacketParams = await dal.exceute(sql);

    if (info.affectedRows === 0) {
      throw new ResourceNotFoundError(product.id);
    }

    return product;
  }

  // Delete product:
  public async deleteProduct(id: number): Promise<void> {
    const sql = 'DELETE FROM products WHERE id = ' + id;
    const info: OkPacketParams = await dal.exceute(sql);

    if (info.affectedRows === 0) {
      throw new ResourceNotFoundError(id);
    }

    return;
  }

  // getProductsByPriceRange
  public async getProductsByPriceRange(
    min: number,
    max: number
  ): Promise<ProductModel[]> {
    const sql = `SELECT * FROM products WHERE price BETWEEN ${min} AND ${max}`;
    const products = await dal.exceute(sql);
    return products;
  }
}

export const productsService = new ProductsService();
