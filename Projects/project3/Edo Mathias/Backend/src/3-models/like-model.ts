import Joi from 'joi';
import { ValidationError } from './client-errors';

export class LikeModel {
  public userId: number;
  public vacationId: number;

  public constructor(like: LikeModel) {
    this.userId = like.userId;
    this.vacationId = like.vacationId;
  }

  // Build validation insert schema:
  private static insertValidationSchema = Joi.object({
    userId: Joi.number().required().min(1).integer(),
    vacationId: Joi.number().required().min(1).integer(),
  });

  public validateInsert(): void {
    const result = LikeModel.insertValidationSchema.validate(this);
    if (result.error) {
      throw new ValidationError(result.error.message);
    }
  }
}
