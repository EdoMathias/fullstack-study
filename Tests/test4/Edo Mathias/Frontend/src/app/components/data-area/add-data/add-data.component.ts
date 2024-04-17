import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { EventModel } from '../../../models/event-model';
import { Router } from '@angular/router';
import { EventTypeModel } from '../../../models/eventType-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-data',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css',
})
export class AddDataComponent implements OnInit {
  public eventTypes: EventTypeModel[];
  public event = new EventModel();

  public constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  public async ngOnInit() {
    try {
      this.eventTypes = await this.dataService.getAllEventTypes();
    } catch (error: any) {
      alert(error.message);
    }
  }

  public async send() {
    try {
      await this.dataService.addEvent(this.event);
      this.router.navigateByUrl('/list');
    } catch (error: any) {
      alert(error.message);
    }
  }
}
