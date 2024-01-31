import express, { Request, Response } from 'express';
import { productsService } from '../5-services/products-service';

class ProductsController {
  // The router listens to different routes and methods
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  // Registering routes
  private registerRoutes(): void {
    this.router.get('/api/products', this.getAllProducts);
  }

  // GET all products
  private async getAllProducts(
    request: Request,
    response: Response
  ): Promise<void> {
    const products = await productsService.getAllProducts();
    response.json(products);
  }
}

const productsController = new ProductsController();
export const productsRouter = productsController.router;
