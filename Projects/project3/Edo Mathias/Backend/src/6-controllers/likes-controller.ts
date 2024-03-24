import express, { NextFunction, Request, Response } from 'express';
import { LikeModel } from '../3-models/like-model';
import { StatusCode } from '../3-models/status-codes';
import { likesService } from '../5-services/likes-service';

class LikesController {
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.post('/like', this.addLike);
    this.router.delete('/like/:userId/:vacationId', this.removeLike);
  }

  private async addLike(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const likedVacation = new LikeModel(request.body);
      await likesService.addLike(likedVacation);
      response.status(StatusCode.Created);
    } catch (err: any) {
      next(err);
    }
  }

  private async removeLike(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const params = request.params;
      const userId = +params.userId;
      const vacationId = +params.vacationId;
      await likesService.removeLike(userId, vacationId);
      response.status(StatusCode.NoContent);
    } catch (err: any) {
      next(err);
    }
  }
}

const likesController = new LikesController();
export const likesRouter = likesController.router;