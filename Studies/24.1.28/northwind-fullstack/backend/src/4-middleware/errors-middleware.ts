import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../3-models/status-codes';
import { RouteNotFoundError } from '../3-models/client-errors';
import { appConfig } from '../2-utils/app-config';

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
    const message =
      appConfig.isProduction && status === StatusCode.InternalServerError
        ? 'Error occured'
        : err.message;

    // Response back the error
    response.status(status).send(message);
  }

  public routeNotFound(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    // Log error
    const error = new RouteNotFoundError(request.originalUrl);
    next(error);
  }
}

export const errorsMiddleware = new ErrorsMiddleware();
