import Joi from 'joi';
import { ValidationError } from './client-errors';

export class EventModel {
  public id: number;
  public type: number;
  public date: string;
  public description: string;
  public address: string;
  public capacity: number;

  public constructor(event: EventModel) {
    this.id = event.id;
    this.type = event.type;
    this.date = event.date;
    this.description = event.description;
    this.address = event.address;
    this.capacity = event.capacity;
  }

  private static insertValidationSchema = Joi.object({
    id: Joi.number().forbidden(),
    type: Joi.number().required().integer().positive(),
    date: Joi.string().required().isoDate(),
    description: Joi.string().required().min(2).max(100),
    address: Joi.string().required().min(2).max(100),
    capacity: Joi.number().optional().integer().min(5).max(1000),
  });

  public validateInsert(): void {
    const result = EventModel.insertValidationSchema.validate(this);
    if (result.error?.message) throw new ValidationError(result.error.message);
  }
}
