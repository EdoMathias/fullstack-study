import express, { NextFunction, Request, Response } from 'express';
import { AttackModel } from '../3-models/attack-model';
import { attackService } from '../5-services/attack-service';
import { StatusCode } from '../3-models/enums';

// Data controller:
class AttackController {
  // Create a router object for listening to HTTP requests:
  public readonly router = express.Router();

  // Register routes once:
  public constructor() {
    this.registerRoutes();
  }

  // Register routes:
  private registerRoutes(): void {
    this.router.post('/attacks', this.attackDetected);
  }

  private async attackDetected(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const attack = new AttackModel(request.body);
      const addedAttack = await attackService.attackDetected(attack);
      response.status(StatusCode.Created).json(addedAttack);
    } catch (err: any) {
      next(err);
    }
  }
}

const attackController = new AttackController();
export const attackRouter = attackController.router;
