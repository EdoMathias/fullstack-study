import { dal } from '../2-utils/dal';
import { OkPacketParams } from 'mysql2';
import { CategoryModel } from '../3-models/category-model';
import { ProductModel } from '../3-models/product-model';
import { ResourceNotFoundError } from '../3-models/client-errors';

class DataService {
  public async getAllCategories(): Promise<CategoryModel[]> {
    const sql = 'SELECT * FROM categories';
    const categories = await dal.execute(sql);
    return categories;
  }

  public async getProductsByCategory(
    categoryId: number
  ): Promise<ProductModel[]> {
    const sql = 'SELECT * FROM products WHERE categoryId = ?';
    const values = [categoryId];
    const products = await dal.execute(sql, values);
    return products;
  }

  public async getProductById(productId: number): Promise<ProductModel> {
    const sql = 'SELECT * FROM products WHERE id = ?';
    const values = [productId];

    const products = await dal.execute(sql, values);
    const product = products[0];
    // if product does not exist
    if (!product) {
      throw new ResourceNotFoundError(productId);
      // next(error);
    }

    return product;
  }

  public async addProduct(product: ProductModel): Promise<ProductModel> {
    const sql =
      'INSERT INTO products(name, producedDateTime, expiryDateTime, categoryId, price) VALUES(?, ?, ?, ?, ?)';
    const values = [
      product.name,
      product.producedDateTime,
      product.expiryDateTime,
      product.categoryId,
      product.price,
    ];
    const info: OkPacketParams = await dal.execute(sql, values);
    product.id = info.insertId;
    return product;
  }

  public async updateProduct(product: ProductModel): Promise<ProductModel> {
    // product.validateUpdate();

    const sql = `UPDATE products SET name=?, producedDateTime=?, expiryDateTime=?, categoryId=?, price=? WHERE id = ?`;
    const values = [
      product.name,
      product.producedDateTime,
      product.expiryDateTime,
      product.categoryId,
      product.price,
      product.id,
    ];
    const info: OkPacketParams = await dal.execute(sql, values);

    if (info.affectedRows === 0) {
      throw new ResourceNotFoundError(product.id);
    }

    // Take database product:
    product = await this.getProductById(product.id);

    return product;
  }

  public async deleteProduct(productId: number): Promise<void> {
    const sql = 'DELETE FROM products WHERE id = ' + productId;
    const info: OkPacketParams = await dal.execute(sql);

    if (info.affectedRows === 0) {
      throw new ResourceNotFoundError(productId);
    }
  }
}

export const dataService = new DataService();
