import { NextFunction, Request, Response } from 'express';

class SabbathForbiddenMiddleware {
  public blockOnSabbath(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    // get Date
    const date = new Date().getDay();

    // Sabbath equals 6
    if (date === 6) {
      const err = {
        status: 500,
        message: 'Forbidden to use on Sabbath',
      };
      next(err);
    } else {
      // Continue the request forward
      next();
    }
  }
}

export const sabbathForbiddenMiddleware = new SabbathForbiddenMiddleware();
