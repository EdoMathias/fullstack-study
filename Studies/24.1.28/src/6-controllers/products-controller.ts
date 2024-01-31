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
    this.router.get('/api/products/:id', this.getProductById);
    this.router.post('/api/products', this.addProduct);
  }

  // GET all products
  private async getAllProducts(
    request: Request,
    response: Response
  ): Promise<void> {
    const products = await productsService.getAllProducts();
    response.json(products);
  }

  // GET single product
  private async getProductById(
    request: Request,
    response: Response
  ): Promise<void> {
    const id = request.params.id;
    const product = await productsService.getProductById(Number(id));
    response.json(product);
  }

  // Add product
  private async addProduct(
    request: Request,
    response: Response
  ): Promise<void> {
    const product = request.body;
    // We must tell express to create this "body" from the given json.
    const addedProduct = await productsService.addProduct(product);
    response.json(addedProduct);
  }
}

const productsController = new ProductsController();
export const productsRouter = productsController.router;
