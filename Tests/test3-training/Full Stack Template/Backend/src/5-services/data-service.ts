import { dal } from '../2-utils/dal';
import { OkPacketParams } from 'mysql2';
import { AudienceModel } from '../3-models/audience-model';
import { GiftModel } from '../3-models/gift-model';

class DataService {
  public async getAllAudiences(): Promise<AudienceModel[]> {
    const sql = 'SELECT * FROM audiences';
    const audiences = await dal.execute(sql);
    return audiences;
  }

  public async getGiftsByAudience(audienceId: number): Promise<GiftModel[]> {
    const sql = 'SELECT * FROM gifts WHERE audienceId = ?';
    const values = [audienceId];
    const gifts = await dal.execute(sql, values);
    return gifts;
  }

  public async addGift(gift: GiftModel): Promise<GiftModel> {
    const sql =
      'INSERT INTO gifts(audienceId, name, description, price, discount) VALUES(?, ?, ?, ?, ?)';
    const values = [
      gift.audienceId,
      gift.name,
      gift.description,
      gift.price,
      gift.discount,
    ];
    const info: OkPacketParams = await dal.execute(sql, values);
    gift.id = info.insertId;
    return gift;
  }
}

export const dataService = new DataService();
