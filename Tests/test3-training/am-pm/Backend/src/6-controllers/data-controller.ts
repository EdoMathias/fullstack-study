import express, { NextFunction, Request, Response } from 'express';
import { dataService } from '../5-services/data-service';
import { ProductModel } from '../3-models/product-model';
import { StatusCode } from '../3-models/enums';

// Data controller:
class DataController {
  // Create a router object for listening to HTTP requests:
  public readonly router = express.Router();

  // Register routes once:
  public constructor() {
    this.registerRoutes();
  }

  // Register routes:
  private registerRoutes(): void {
    this.router.get('/categories', this.getAllCategories);
    this.router.get(
      '/products-by-category/:categoryId',
      this.getProductsByCategory
    );
    this.router.get('/products/:productId', this.getProductById);
    this.router.post('/products', this.addProduct);
    this.router.put('/products/:id', this.updateProduct);
    this.router.delete('/products/:productId', this.deleteProduct);
  }

  private async getAllCategories(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      try {
        const categories = await dataService.getAllCategories();
        response.json(categories);
      } catch (err: any) {
        next(err);
      }
    } catch (err: any) {
      next(err);
    }
  }

  private async getProductsByCategory(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const categoryId = +request.params.categoryId;
      const products = await dataService.getProductsByCategory(categoryId);
      response.json(products);
    } catch (error: any) {
      next(error);
    }
  }

  private async getProductById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const productId = +request.params.productId;
      const product = await dataService.getProductById(productId);
      console.log(product);

      response.json(product);
    } catch (error: any) {
      next(error);
    }
  }

  private async addProduct(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const product = new ProductModel(request.body);
      const addedProduct = await dataService.addProduct(product);
      response.status(StatusCode.Created).json(addedProduct);
    } catch (error: any) {
      next(error);
    }
  }

  private async updateProduct(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      request.body.id = +request.params.id;
      console.log('body: ', request.body);

      const product = new ProductModel(request.body);
      console.log(product);

      const updatedProduct = await dataService.updateProduct(product);
      response.json(updatedProduct);
    } catch (error: any) {
      next(error);
    }
  }

  private async deleteProduct(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const productId = +request.params.productId;
      await dataService.deleteProduct(productId);
      response.sendStatus(StatusCode.NoContent);
    } catch (error: any) {
      next(error);
    }
  }
}

const dataController = new DataController();
export const dataRouter = dataController.router;
