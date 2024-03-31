import axios from 'axios';
import express, { NextFunction, Request, Response } from 'express';
import { appConfig } from '../2-utils/app-config';

// Data controller:
class GatewayController {
  // Create a router object for listening to HTTP requests:
  public readonly router = express.Router();

  // Register routes once:
  public constructor() {
    this.registerRoutes();
  }

  // Register routes:
  private registerRoutes(): void {
    this.router.post('/attacks', this.attackDetected);
    this.router.post('/decisions', this.shouldIntercept);
  }

  // POST /api/attacks:
  private async attackDetected(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // Authentication by an auth micro service...
      const msResponse = await axios.post(appConfig.attacksUrl, request.body);
      response.status(msResponse.status).json(msResponse.data);
    } catch (err: any) {
      next(err);
    }
  }

  // POST /api/decisions:
  private async shouldIntercept(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      // Authentication by an auth micro service...
      const msResponse = await axios.post(appConfig.decisionsUrl, request.body);
      response.status(msResponse.status).json(msResponse.data);
    } catch (err: any) {
      next(err);
    }
  }
}

const gatewayController = new GatewayController();
export const gatewayRouter = gatewayController.router;
