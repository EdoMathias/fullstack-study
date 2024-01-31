import { NextFunction, Request, Response } from 'express';

class LoggingMiddleware {
  public logToConsole(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    // Test for next with an error message when failing on a case:
    // if (Math.random() < 0.25) {
    //   const err = {
    //     status: 500,
    //     message: 'Testing catchAll middleware',
    //   };
    //   next(err);
    //   return;
    // }

    console.log(`Request: ${request.method}`);
    console.log(`Route: ${request.route}`);
    console.log(`Body: ${JSON.stringify(request.body)}`);

    // Continue the request forward
    next();
  }
}

export const loggingMiddleware = new LoggingMiddleware();
