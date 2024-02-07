import { NextFunction, Request, Response } from 'express';
import fs from 'fs';

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
    console.log(`Route: ${request.originalUrl}`);
    console.log(`Body: ${JSON.stringify(request.body)}`);

    // Continue the request forward
    next();
  }

  public logToFile(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    fs.appendFile(
      'logger.txt',
      `//----//\n Time: ${new Date().toLocaleString()}\n Method: ${
        request.method
      }\n Route: ${request.originalUrl}\n Body: ${JSON.stringify(
        request.body
      )}\n`,
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );

    next();
  }
}

export const loggingMiddleware = new LoggingMiddleware();
