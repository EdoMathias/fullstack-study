import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventTypeModel } from '../../../models/eventType-model';
import { EventModel } from '../../../models/event-model';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css',
})
export class DataListComponent implements OnInit {
  public eventTypes: EventTypeModel[];
  public events: EventModel[];

  public constructor(private dataService: DataService) {}

  public async ngOnInit(): Promise<void> {
    try {
      this.eventTypes = await this.dataService.getAllEventTypes();
    } catch (error: any) {
      alert(error.message);
    }
  }

  public async displayEvents(event: Event) {
    try {
      const select = event.target as HTMLSelectElement;
      const eventTypeId = +select.value;
      this.events = await this.dataService.getEventsByType(eventTypeId);
    } catch (error: any) {
      alert(error.message);
    }
  }

  public async deleteEvent(eventId: number) {
    try {
      await this.dataService.deleteEvent(eventId);
      this.events = this.events.filter((event) => event.id !== eventId);
    } catch (error: any) {
      alert(error.message);
    }
  }

  public getEventStatus(eventDate: string): {
    passed: boolean;
    daysUntil: number;
  } {
    const currentDate = new Date();
    const eventDateObj = new Date(eventDate);
    const timeDiff = eventDateObj.getTime() - currentDate.getTime();
    const daysUntil = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return {
      passed: currentDate > eventDateObj,
      daysUntil: daysUntil > 0 ? daysUntil : 0,
    };
  }
}
