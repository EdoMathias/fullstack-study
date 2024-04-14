import { Component, OnInit } from '@angular/core';
import { AudienceModel } from '../../../models/audience-model';
import { GiftModel } from '../../../models/gift-model';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css',
})
export class DataListComponent implements OnInit {
  public audiences: AudienceModel[];
  public gifts: GiftModel[];

  public constructor(private dataService: DataService) {}

  public async ngOnInit() {
    try {
      this.audiences = await this.dataService.getAllAudiences();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public async displayGifts(event: Event) {
    try {
      const select = event.target as HTMLSelectElement;
      const audienceId = +select.value;
      this.gifts = await this.dataService.getGiftsByAudience(audienceId);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
