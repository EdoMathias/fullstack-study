import express, { NextFunction, Request, Response } from 'express';
import { productsService } from '../5-services/products-service';
import { StatusCode } from '../3-models/status-codes';
import { ProductModel } from '../3-models/product-model';

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
    this.router.put('/api/products/:id', this.updateProduct);
    this.router.delete('/api/products/:id', this.deleteProduct);
    this.router.get(
      '/api/products-by-price-range/:min/:max',
      this.getProductsByPriceRange
    );
  }

  // GET all products
  private async getAllProducts(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const products = await productsService.getAllProducts();
      response.json(products);
    } catch (error: any) {
      next(error);
    }
  }

  // GET single product
  private async getProductById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = request.params.id;
      const product = await productsService.getProductById(Number(id));
      response.json(product);
    } catch (error: any) {
      next(error);
    }
  }

  // Add product
  private async addProduct(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // const product = request.body;
      const product = new ProductModel(request.body);
      // We must tell express to create this "body" from the given json.
      const addedProduct = await productsService.addProduct(product);
      response.status(StatusCode.Created).json(addedProduct);
    } catch (error: any) {
      next(error);
    }
  }

  // Update existing product
  private async updateProduct(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      request.body.id = Number(request.params.id);
      const product = new ProductModel(request.body);
      // We must tell express to create this "body" from the given json.
      const updatedProduct = await productsService.updateProduct(product);
      response.json(updatedProduct);
    } catch (error: any) {
      next(error);
    }
  }

  // Delete existing product
  private async deleteProduct(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = +request.params.id;
      await productsService.deleteProduct(id);
      response.sendStatus(StatusCode.NoContent); // same as response.statue(StatusCode.NoContent).json();
    } catch (error: any) {
      next(error);
    }
  }

  // GET products by price range
  private async getProductsByPriceRange(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const priceRange = {
        min: +request.params.min,
        max: +request.params.max,
      };
      const products = await productsService.getProductsByPriceRange(
        priceRange.min,
        priceRange.max
      );
      response.json(products);
    } catch (error: any) {
      next(error);
    }
  }
}

const productsController = new ProductsController();
export const productsRouter = productsController.router;
