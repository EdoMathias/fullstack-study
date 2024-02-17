import Joi from 'joi';
import { ValidationError } from './client-errors';
import { UploadedFile } from 'express-fileupload';

export class ProductModel {
  public id: number;
  public name: string;
  public price: number;
  public stock: number;
  // public categoryId: number;
  // public supplierId: number;
  // public quantity: string;
  public image: UploadedFile;

  public constructor(product: ProductModel) {
    // Copy constructor
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
    this.image = product.image;
  }

  // Build validation insert schema:
  private static insertValidationSchema = Joi.object({
    id: Joi.number().forbidden(),
    name: Joi.string().required().min(2).max(50),
    price: Joi.number().required().min(0).max(1000),
    stock: Joi.number().required().min(0).max(1000).integer(),
    image: Joi.object().required(),
  });

  private static updateValidationSchema = Joi.object({
    id: Joi.number().required().min(1).integer(),
    name: Joi.string().required().min(2).max(50),
    price: Joi.number().required().min(0).max(1000),
    stock: Joi.number().required().min(0).max(1000).integer(),
    image: Joi.object().optional(),
  });

  public validateInsert(): void {
    const result = ProductModel.insertValidationSchema.validate(this);
    if (result.error) {
      throw new ValidationError(result.error.message);
    }
  }

  public validateUpdate(): void {
    const result = ProductModel.updateValidationSchema.validate(this);
    if (result.error) {
      throw new ValidationError(result.error.message);
    }
  }
}
