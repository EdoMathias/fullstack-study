import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../app.config';
import { firstValueFrom } from 'rxjs';
import { EventTypeModel } from '../models/eventType-model';
import { EventModel } from '../models/event-model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public async getAllEventTypes(): Promise<EventTypeModel[]> {
    const observable = this.http.get<EventTypeModel[]>(appConfig.eventTypesUrl);
    const eventTypes = await firstValueFrom(observable);
    return eventTypes;
  }

  public async getEventsByType(eventTypeId: number): Promise<EventModel[]> {
    const observable = this.http.get<EventModel[]>(
      appConfig.eventsUrl + eventTypeId
    );
    const events = await firstValueFrom(observable);
    return events;
  }

  public async addEvent(event: EventModel): Promise<EventModel> {
    const observable = this.http.post<EventModel>(appConfig.eventsUrl, event);
    const addedEvent = await firstValueFrom(observable);
    return addedEvent;
  }

  public async deleteEvent(eventId: number): Promise<void> {
    const observable = this.http.delete<void>(appConfig.eventsUrl + eventId);
    await firstValueFrom(observable);
  }
}
