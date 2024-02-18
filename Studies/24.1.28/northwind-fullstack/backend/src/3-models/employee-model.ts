import { RoleModel } from './role-model';
import Joi from 'joi';
import { ValidationError } from './client-errors';

export class EmployeeModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public birthDate: string;

  constructor(employee: EmployeeModel) {
    this.id = employee.id;
    this.firstName = employee.firstName;
    this.lastName = employee.lastName;
    this.birthDate = employee.birthDate;
  }

  // validation
  private static insertValidationSchema = Joi.object({
    id: Joi.number().forbidden(),
    firstName: Joi.string().required().min(2).max(50),
    lastName: Joi.string().required().min(2).max(50),
    birthDate: Joi.string().required().isoDate(),
  });

  private static updateValidationSchema = Joi.object({
    id: Joi.number().required().min(1).integer(),
    firstName: Joi.string().required().min(2).max(50),
    lastName: Joi.string().required().min(2).max(50),
    birthDate: Joi.string().required().isoDate(),
  });

  public validateInsert(): void {
    const result = EmployeeModel.insertValidationSchema.validate(this);
    if (result.error) {
      throw new ValidationError(result.error.message);
    }
  }

  public validateUpdate(): void {
    const result = EmployeeModel.updateValidationSchema.validate(this);
    if (result.error) {
      throw new ValidationError(result.error.message);
    }
  }
}
