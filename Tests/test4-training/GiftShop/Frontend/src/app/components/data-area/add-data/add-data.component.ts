import { Component, OnInit } from '@angular/core';
import { AudienceModel } from '../../../models/audience-model';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { FormsModule } from '@angular/forms';
import { GiftModel } from '../../../models/gift-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-data.component.html',
  styleUrl: './add-data.component.css',
})
export class AddDataComponent implements OnInit {
  public audiences: AudienceModel[];
  public gift: GiftModel;

  public constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  public async ngOnInit() {
    try {
      this.audiences = await this.dataService.getAllAudiences();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public async send() {
    try {
      await this.dataService.addGift(this.gift);
      alert('Gift has been added!');
      this.router.navigateByUrl('/list');
    } catch (error: any) {
      alert(error.message);
    }
  }
}
