import Joi from 'joi';
import { ValidationError } from './client-errors';

export class ProductModel {
  public id: number;
  public name: string;
  public producedDateTime: string;
  public expiryDateTime: string;
  public categoryId: number;
  public price: string;

  public constructor(product: ProductModel) {
    this.id = product.id;
    this.name = product.name;
    this.producedDateTime = product.producedDateTime;
    this.expiryDateTime = product.expiryDateTime;
    this.categoryId = product.categoryId;
    this.price = product.price;
  }

  private static insertValidationSchema = Joi.object({
    id: Joi.number().forbidden(),
    name: Joi.string().required().min(1).max(50),
    producedDateTime: Joi.string().required().isoDate(),
    expiryDateTime: Joi.string().required().isoDate(),
    categoryId: Joi.number().required().integer().positive(),
    price: Joi.number().required().min(0).max(10000),
  });

  public validateInsert(): void {
    const result = ProductModel.insertValidationSchema.validate(this);
    if (result.error?.message) {
      throw new ValidationError(result.error.message);
    }
  }
}
