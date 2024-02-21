import axios from 'axios';
import { AudienceModel } from '../Models/AudienceModel';
import { appConfig } from '../Utils/AppConfig';
import { GiftModel } from '../Models/GiftModel';

class DataService {
  public async getAllAudiences(): Promise<AudienceModel[]> {
    const response = await axios.get<AudienceModel[]>(appConfig.audiencesUrl);
    const audiences = response.data;
    return audiences;
  }
  public async getGiftsByAudience(audienceId: number): Promise<GiftModel[]> {
    const response = await axios.get<GiftModel[]>(
      appConfig.giftsByAudienceUrl + audienceId
    );
    const gifts = response.data;
    return gifts;
  }
  public async addGift(gift: GiftModel): Promise<void> {
    const response = await axios.post<GiftModel>(
      appConfig.giftsUrl,
      gift,
      appConfig.axiosOptions
    );
    const addedGift = response.data;
    console.log('Gift added: ', addedGift);
  }
}

export const dataService = new DataService();
