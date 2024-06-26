import express, { NextFunction, Request, Response } from 'express';
import { VacationModel } from '../3-models/vacation-model';
import { vacationsService } from '../5-services/vacations-service';
import { StatusCode } from '../3-models/status-codes';
import { fileSaver } from 'uploaded-file-saver';
import { securityMiddleware } from '../4-middleware/security-middleware';

class VacationsController {
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.get(
      '/vacations-by-user/:userId',
      securityMiddleware.verifyLoggedIn,
      this.getAllVacations
    );
    this.router.get(
      '/vacations/:id',
      securityMiddleware.verifyLoggedIn,
      this.getVacationById
    );
    this.router.post(
      '/vacations',
      securityMiddleware.verifyLoggedIn,
      securityMiddleware.verifyAdmin,
      this.addVacation
    );
    this.router.put(
      '/vacations/:id',
      securityMiddleware.verifyLoggedIn,
      securityMiddleware.verifyAdmin,
      this.editVacation
    );
    this.router.delete(
      '/vacations/:id',
      securityMiddleware.verifyLoggedIn,
      securityMiddleware.verifyAdmin,
      this.deleteVacation
    );
    this.router.get('/vacations/images/:imageName', this.getImageFile);
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

  private async getVacationById(
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

  private async getImageFile(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const imageName = request.params.imageName;
      const imagePath = fileSaver.getFilePath(imageName);
      response.sendFile(imagePath);
    } catch (err: any) {
      next(err);
    }
  }

  private async addVacation(
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

  private async editVacation(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      request.body.image = request.files?.image;
      request.body.id = +request.params.id;
      const vacation = new VacationModel(request.body);
      const editedVacation = await vacationsService.editVacation(vacation);
      response.json(editedVacation);
    } catch (err: any) {
      next(err);
    }
  }

  private async deleteVacation(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = +request.params.id;
      await vacationsService.deleteVacation(id);
      response.sendStatus(StatusCode.NoContent);
    } catch (error: any) {
      next(error);
    }
  }
}

const vacationsController = new VacationsController();
export const vacationsRouter = vacationsController.router;
