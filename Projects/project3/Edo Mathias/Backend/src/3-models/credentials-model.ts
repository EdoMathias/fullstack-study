import Joi from 'joi';
import { ValidationError } from './client-errors';

export class CredentialsModel {
  public email: string;
  public password: string;

  constructor(credentials: CredentialsModel) {
    this.email = credentials.email;
    this.password = credentials.password;
  }

  private static loginValidationSchema = Joi.object({
    email: Joi.string().required().min(0).max(100).email(),
    password: Joi.string().required().min(4).max(48),
  });

  public validateLogin(): void {
    const result = CredentialsModel.loginValidationSchema.validate(this);
    if (result.error) {
      throw new ValidationError(result.error.message);
    }
  }
}
