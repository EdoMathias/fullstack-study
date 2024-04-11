import express, { NextFunction, Request, Response } from 'express';
import { LikeModel } from '../3-models/like-model';
import { StatusCode } from '../3-models/status-codes';
import { likesService } from '../5-services/likes-service';
import { securityMiddleware } from '../4-middleware/security-middleware';

class LikesController {
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.post('/like', securityMiddleware.verifyLoggedIn, this.addLike);
    this.router.delete(
      '/like/:userId/:vacationId',
      securityMiddleware.verifyLoggedIn,
      this.removeLike,
    );
  }

  private async addLike(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const likedVacation = new LikeModel(request.body);
      await likesService.addLike(likedVacation);
      response.status(StatusCode.Created).send('Like added successfully');
    } catch (err: any) {
      next(err);
    }
  }

  private async removeLike(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const params = request.params;
      const userId = +params.userId;
      const vacationId = +params.vacationId;
      await likesService.removeLike(userId, vacationId);
      response.status(StatusCode.NoContent).send('Like removed successfully');
    } catch (err: any) {
      next(err);
    }
  }
}

const likesController = new LikesController();
export const likesRouter = likesController.router;
