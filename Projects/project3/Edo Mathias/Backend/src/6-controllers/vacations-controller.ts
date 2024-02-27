import express, { NextFunction, Request, Response } from 'express';
import { VacationModel } from '../3-models/vacation-model';
import { vacationsService } from '../5-services/vacations-service';
import { StatusCode } from '../3-models/status-codes';

class VacationsController {
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.get('/vacations-by-user/:userId', this.getAllVacations);
    this.router.get('/vacations/:id', this.getVacationById);
    this.router.post('/vacations', this.addVacation);
  }

  private async getAllVacations(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = +request.params.userId;
      const vacations = await vacationsService.getVacations(userId);
      response.json(vacations);
    } catch (err: any) {
      next(err);
    }
  }

  public async getVacationById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = +request.params.id;
      const vacation = await vacationsService.getVacationById(id);
      response.json(vacation);
    } catch (err: any) {
      next(err);
    }
  }

  public async addVacation(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      request.body.image = request.files?.image;
      const vacation = new VacationModel(request.body);
      console.log(vacation);

      const addedVacation = await vacationsService.addVacation(vacation);
      response.status(StatusCode.Created).json(addedVacation);
    } catch (err: any) {
      next(err);
    }
  }
}

const vacationsController = new VacationsController();
export const vacationsRouter = vacationsController.router;
