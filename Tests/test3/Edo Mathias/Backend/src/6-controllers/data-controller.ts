import express, { NextFunction, Request, Response } from 'express';
import { dataService } from '../5-services/data-service';
import { MeetingModel } from '../3-models/meeting-model';
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
    this.router.get('/teams', this.getAllTeams);
    this.router.get('/meetings-by-team/:teamId', this.getMeetingsByTeam);
    this.router.post('/meetings', this.addMeeting);
  }

  // GET http://localhost:4000/api/teams
  private async getAllTeams(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const teams = await dataService.getAllTeams();
      response.json(teams);
    } catch (err: any) {
      next(err);
    }
  }

  // GET http://localhost:4000/api/meetings-by-team/:teamId
  private async getMeetingsByTeam(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const teamId = +request.params.teamId;
      const meetings = await dataService.getMeetingsByTeam(teamId);
      response.json(meetings);
    } catch (error: any) {
      next(error);
    }
  }

  // POST http://localhost:4000/api/meetings
  private async addMeeting(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const meeting = new MeetingModel(request.body);
      const addedMeeting = await dataService.addMeeting(meeting);
      response.status(StatusCode.Created).json(addedMeeting);
    } catch (error: any) {
      next(error);
    }
  }
}

const dataController = new DataController();
export const dataRouter = dataController.router;
