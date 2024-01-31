import { NextFunction, Request, Response } from 'express';

class LoggingMiddleware {
  public logToConsole(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    console.log(`Request: ${request.method}`);
    console.log(`Route: ${request.route}`);
    console.log(`Body: ${JSON.stringify(request.body)}`);

    // Continue the request forward
    next();
  }
}

export const loggingMiddleware = new LoggingMiddleware();
