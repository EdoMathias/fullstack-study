import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../3-models/status-codes';
import requestIp from 'request-ip';

class SecurityMiddleware {
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
