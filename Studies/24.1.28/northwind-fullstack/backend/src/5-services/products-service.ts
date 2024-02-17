import { OkPacketParams } from 'mysql2';
import { dal } from '../2-utils/dal';
import { ProductModel } from '../3-models/product-model';
import { ResourceNotFoundError } from '../3-models/client-errors';
import { fileSaver } from 'uploaded-file-saver';
import { appConfig } from '../2-utils/app-config'; // Import the appConfig object

class ProductsService {
  public async getAllProducts(): Promise<ProductModel[]> {
    const sql = `SELECT *, CONCAT('${appConfig.baseImageUrl}', imageName) as imageUrl FROM products`;
    const products = await dal.exceute(sql);
    return products;
  }

  public async getProductById(id: number): Promise<ProductModel> {
    const sql = `SELECT *, CONCAT('${appConfig.baseImageUrl}', imageName) as imageUrl FROM products WHERE id = ${id}`;

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
    // Valitade:
    product.validateInsert();

    // Save image to hard-disk
    const imageName = await fileSaver.add(product.image);

    const sql = `INSERT INTO products(name, price, stock, imageName) 
      VALUES('${product.name}', ${product.price}, ${product.stock}, '${imageName}')`;

    // execute:
    const info: OkPacketParams = await dal.exceute(sql);

    // Take database product:
    product = await this.getProductById(info.insertId);

    return product;
  }

  // Update product:
  public async updateProduct(product: ProductModel): Promise<ProductModel> {
    product.validateUpdate();

    // Get old image name from database:
    const oldImageName = await this.getImageName(product.id);

    // Save new image instead of the old one:
    const newImageName = product.image
      ? await fileSaver.update(oldImageName, product.image)
      : oldImageName;

    const sql = `UPDATE products SET
      name = '${product.name}',
      price = ${product.price},
      stock = ${product.stock},
      imageName = '${newImageName}'
      WHERE id = ${product.id}`;

    const info: OkPacketParams = await dal.exceute(sql);

    if (info.affectedRows === 0) {
      throw new ResourceNotFoundError(product.id);
    }

    // Take database product:
    product = await this.getProductById(product.id);

    return product;
  }

  // Delete product:
  public async deleteProduct(id: number): Promise<void> {
    const oldImageName = await this.getImageName(id);

    const sql = 'DELETE FROM products WHERE id = ' + id;
    const info: OkPacketParams = await dal.exceute(sql);

    if (info.affectedRows === 0) {
      throw new ResourceNotFoundError(id);
    }

    // Delete image from hard-disk
    await fileSaver.delete(oldImageName);
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

  private async getImageName(id: number): Promise<string> {
    const sql = `SELECT imageName from products WHERE id = '${id}'`;
    const products = await dal.exceute(sql);
    const product = products[0];
    const imageName = product.imageName;
    return imageName;
  }
}

export const productsService = new ProductsService();
