import express, { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../3-models/status-codes';
import { UserModel } from '../3-models/user-model';
import { authService } from '../5-services/auth-service';

class AuthController {
  // The router listens to different routes and methods
  public readonly router = express.Router();

  public constructor() {
    this.registerRoutes();
  }

  // Registering routes
  private registerRoutes(): void {
    this.router.post('/api/register', this.register);
  }

  // Register
  private async register(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = new UserModel(request.body);
      const token = await authService.register(user);
      response.status(StatusCode.Created).json(token);
    } catch (error: any) {
      next(error);
    }
  }
}

const authController = new AuthController();
export const authRouter = authController.router;
