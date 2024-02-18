import express, { Request, Response } from 'express';
import { supplierService } from '../5-services/supplier-service';

class SupplierController {
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.get('/api/suppliers', this.getAllSuppliers);
  }

  private async getAllSuppliers(
    request: Request,
    response: Response
  ): Promise<void> {
    const suppliers = await supplierService.getAllSuppliers();
    response.json(suppliers);
  }
}

const supplierController = new SupplierController();
export const supplierRouter = supplierController.router;
