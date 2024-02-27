import Joi from 'joi';
import { ValidationError } from './client-errors';
import { UploadedFile } from 'express-fileupload';

export class VacationModel {
  public id: number;
  public destination: string;
  public description: string;
  public startDate: string;
  public endDate: string;
  public price: number;
  public image: UploadedFile;

  public constructor(vacation: VacationModel) {
    this.id = vacation.id;
    this.destination = vacation.destination;
    this.description = vacation.description;
    this.startDate = vacation.startDate;
    this.endDate = vacation.endDate;
    this.price = vacation.price;
    this.image = vacation.image;
  }

  // Build validation insert schema:
  private static insertValidationSchema = Joi.object({
    id: Joi.number().forbidden(),
    destination: Joi.string().required().min(2).max(45),
    description: Joi.string().required().min(2).max(1000),
    startDate: Joi.string().required().isoDate(),
    endDate: Joi.string().required().isoDate(),
    price: Joi.number().required().min(0).max(1000),
    image: Joi.object().required(),
  });

  private static updateValidationSchema = Joi.object({
    id: Joi.number().required().min(1).integer(),
    destination: Joi.string().required().min(2).max(50),
    description: Joi.string().required().min(2).max(50),
    startDate: Joi.string().optional().isoDate(),
    endDate: Joi.string().optional().isoDate(),
    price: Joi.number().required().min(0).max(1000),
    image: Joi.object().optional(),
  });

  public validateInsert(): void {
    const result = VacationModel.insertValidationSchema.validate(this);
    if (result.error) {
      throw new ValidationError(result.error.message);
    }
  }

  public validateUpdate(): void {
    const result = VacationModel.updateValidationSchema.validate(this);
    if (result.error) {
      throw new ValidationError(result.error.message);
    }
  }
}
