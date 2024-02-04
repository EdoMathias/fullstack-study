import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../3-models/status-codes';

class ErrorsMiddleware {
  public catchAll(
    err: any,
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    // Log error
    console.log(err);

    // Extract status code
    const status = err.status ? err.status : StatusCode.InternalServerError;

    // Extract error message
    const message = err.message;

    // Response back the error
    response.status(status).send(message);
  }
}

export const errorsMiddleware = new ErrorsMiddleware();
