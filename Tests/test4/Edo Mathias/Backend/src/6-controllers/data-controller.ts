import express, { NextFunction, Request, Response } from 'express';
import { dataService } from '../5-services/data-service';
import { EventModel } from '../3-models/event-model';
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
    this.router.get('/event-types', this.getAllEventTypes);
    this.router.get('/events/:eventTypeId', this.getEventsByType);
    this.router.post('/events', this.addEvent);
    this.router.delete('/events/:eventId', this.deleteEvent);
  }

  // GET http://localhost:4000/api/event-types
  private async getAllEventTypes(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const eventTypes = await dataService.getAllEventsTypes();
      response.json(eventTypes);
    } catch (err: any) {
      next(err);
    }
  }

  // GET http://localhost:4000/api/events/:eventTypeId
  private async getEventsByType(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const eventTypeId = +request.params.eventTypeId;
      const events = await dataService.getEventsByType(eventTypeId);
      response.json(events);
    } catch (err: any) {
      next(err);
    }
  }

  // POST http://localhost:4000/api/events
  private async addEvent(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const event = new EventModel(request.body);
      const addedEvent = await dataService.addEvent(event);
      response.status(StatusCode.Created).json(addedEvent);
    } catch (err: any) {
      next(err);
    }
  }

  // DELETE http://localhost:4000/api/events/:eventId
  private async deleteEvent(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const eventId = +request.params.eventId;
      await dataService.deleteEvent(eventId);
      response.sendStatus(StatusCode.NoContent);
    } catch (err: any) {
      next(err);
    }
  }
}

const dataController = new DataController();
export const dataRouter = dataController.router;
