import express, { NextFunction, Request, Response } from 'express';
import { GeolocationModel } from '../3-models/geolocation-model';
import { decisionService } from '../5-services/decision-service';

// Data controller:
class DecisionController {
  // Create a router object for listening to HTTP requests:
  public readonly router = express.Router();

  // Register routes once:
  public constructor() {
    this.registerRoutes();
  }

  // Register routes:
  private registerRoutes(): void {
    this.router.post('/decisions', this.shouldIntercept);
  }

  private shouldIntercept(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    try {
      const geo = new GeolocationModel(request.body);
      const result = decisionService.doWeNeedToIntercept(geo);
      response.json({ intercept: result });
    } catch (err: any) {
      next(err);
    }
  }
}

const decisionController = new DecisionController();
export const decisionRouter = decisionController.router;
