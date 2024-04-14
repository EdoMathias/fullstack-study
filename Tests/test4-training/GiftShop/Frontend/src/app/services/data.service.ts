import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AudienceModel } from '../models/audience-model';
import { GiftModel } from '../models/gift-model';
import { appConfig } from '../app.config';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public async getAllAudiences(): Promise<AudienceModel[]> {
    const observable = this.http.get<AudienceModel[]>(appConfig.audiencesUrl);
    const audiences = await firstValueFrom(observable);
    return audiences;
  }

  public async getGiftsByAudience(audienceId: number): Promise<GiftModel[]> {
    const observable = this.http.get<GiftModel[]>(
      appConfig.giftsByAudienceUrl + audienceId
    );
    const gifts = await firstValueFrom(observable);
    return gifts;
  }

  public async addGift(gift: GiftModel): Promise<void> {
    const observable = this.http.post<GiftModel>(appConfig.giftsUrl, gift);
    const addedGift = await firstValueFrom(observable);
    console.log(addedGift);
  }
}
