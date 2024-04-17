import { dal } from '../2-utils/dal';
import { OkPacketParams } from 'mysql2';
import { EventModel } from '../3-models/event-model';
import { EventTypeModel } from '../3-models/eventType-model';
import { ValidationError } from '../3-models/client-errors';

class DataService {
  public async getAllEventsTypes(): Promise<EventTypeModel[]> {
    const sql = 'SELECT * FROM types';

    const eventTypes = await dal.execute(sql);
    return eventTypes;
  }

  public async getEventsByType(eventTypeId: number): Promise<EventModel[]> {
    const sql = 'SELECT * FROM events WHERE type = ?';
    const values = [eventTypeId];

    const events = await dal.execute(sql, values);
    return events;
  }

  public async addEvent(event: EventModel): Promise<EventModel> {
    event.validateInsert();

    const sql =
      'INSERT INTO events(type, date, description, address, capacity) VALUES(?, ?, ?, ?, ?)';
    const values = [
      event.type,
      event.date,
      event.description,
      event.address,
      event.capacity,
    ];

    const info: OkPacketParams = await dal.execute(sql, values);
    event.id = info.insertId;
    return event;
  }

  public async deleteEvent(eventId: number): Promise<void> {
    const sql = 'DELETE FROM events WHERE id = ?';
    const values = [eventId];

    await dal.execute(sql, values);
  }
}

export const dataService = new DataService();
