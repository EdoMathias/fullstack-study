import Joi from 'joi';
import { ValidationError } from './client-errors';

export class GiftModel {
  public id: number;
  public audienceId: number;
  public name: string;
  public description: string;
  public price: number;
  public discount: number;

  public constructor(gift: GiftModel) {
    this.id = gift.id;
    this.audienceId = gift.audienceId;
    this.name = gift.name;
    this.description = gift.description;
    this.price = gift.price;
    this.discount = gift.discount;
  }

  private static insertValidationSchema = Joi.object({
    id: Joi.number().forbidden(),
    audienceId: Joi.number().required().integer().positive(),
    name: Joi.string().required().min(1).max(50),
    description: Joi.string().required().min(5).max(1000),
    price: Joi.number().required().min(0).max(10000),
    discount: Joi.number().optional().integer().min(0).max(100),
  });

  public validateInsert(): void {
    const result = GiftModel.insertValidationSchema.validate(this);
    if (result.error?.message) {
      throw new ValidationError(result.error.message);
    }
  }
}
