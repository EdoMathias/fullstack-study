import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../3-models/status-codes';
import requestIp from 'request-ip';
import { cyber } from '../2-utils/cyber';
import { UnauthorizedError } from '../3-models/client-errors';

class SecurityMiddleware {
  public validateLoggedIn(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    // Get authorization token. if exists, the value will be: "Bearer token"
    const header = request.header('authorization');

    // Extract token:
    const token = header?.substring(7);

    // Validate:
    if (cyber.isTokenValid(token)) {
      next();
    } else {
      const err = new UnauthorizedError('You are not logged-in!');
      next(err);
    }
  }

  public validateAdmin(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    // Get authorization token. if exists, the value will be: "Bearer token"
    const header = request.header('authorization');

    // Extract token:
    const token = header?.substring(7);

    // Validate:
    if (cyber.isAdmin(token)) {
      next();
    } else {
      const err = new UnauthorizedError('You are not authorized!');
      next(err);
    }
  }

  public blacklist(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    // Add '::1' if you want to check unauthorized flow
    const blacklistIPs = ['150.70.6.8', '180.3.2.5'];

    const userIP = requestIp.getClientIp(request);
    console.log(userIP);

    if (blacklistIPs.includes(userIP)) {
      response.status(StatusCode.Unauthorized).send('You are not authorized!');
    } else {
      // Must continue the request forward
      next();
    }
  }
}

export const securityMiddleware = new SecurityMiddleware();
