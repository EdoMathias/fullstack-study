import express, { NextFunction, Request, Response } from 'express';
import { dataService } from '../5-services/data-service';
import { GiftModel } from '../3-models/gift-model';
import { StatusCode } from '../3-models/enums';

// Data controller:
class DataController {
  // Create a router object for listening to HTTP requests:
  public readonly router = express.Router();

  // Register routes once:
  public constructor() {
    this.registerRoutes();
  }

  // Register routes:
  private registerRoutes(): void {
    this.router.get('/audiences', this.getAllAudiences);
    this.router.get('/gifts-by-audience/:audienceId', this.getGiftsByAudience);
    this.router.post('/gifts', this.addGift);
  }

  // GET http://localhost:4000/api/audiences
  private async getAllAudiences(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const audiences = await dataService.getAllAudiences();
      response.json(audiences);
    } catch (err: any) {
      next(err);
    }
  }

  // GET http://localhost:4000/api/gifts-by-audience/:audienceId
  private async getGiftsByAudience(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const audienceId = +request.params.audienceId;
      const gifts = await dataService.getGiftsByAudience(audienceId);
      response.json(gifts);
    } catch (error: any) {
      next(error);
    }
  }

  // POST http://localhost:4000/api/gifts
  private async addGift(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const gift = new GiftModel(request.body);
      const addedGift = await dataService.addGift(gift);
      response.status(StatusCode.Created).json(addedGift);
    } catch (error: any) {
      next(error);
    }
  }
}

const dataController = new DataController();
export const dataRouter = dataController.router;
