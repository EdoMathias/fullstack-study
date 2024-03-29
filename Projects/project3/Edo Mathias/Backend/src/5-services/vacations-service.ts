import { OkPacketParams } from 'mysql2';
import { dal } from '../2-utils/dal';
import { VacationModel } from '../3-models/vacation-model';
import { appConfig } from '../2-utils/app-config';
import { ResourceNotFoundError } from '../3-models/client-errors';
import { fileSaver } from 'uploaded-file-saver';

class VacationsService {
  public async getVacations(userId: number): Promise<VacationModel[]> {
    const sql = `
            SELECT DISTINCT
                V.*,
                EXISTS(SELECT * FROM likes WHERE vacationId = L.vacationId AND userId = ?) AS isLiked,
                COUNT(L.userId) AS likesCount
                , CONCAT('${appConfig.baseImageUrl}', imageName) as imageUrl
            FROM vacations as V LEFT JOIN likes as L
            ON V.id = L.vacationId
            GROUP BY id
            ORDER BY startDate
            `;

    const vacations = await dal.execute(sql, [userId]);

    return vacations;
  }

  public async getVacationById(id: number): Promise<VacationModel> {
    const sql = `SELECT *, CONCAT('${appConfig.baseImageUrl}', imageName) as imageUrl FROM vacations WHERE id = ${id}`;
    const vacations = await dal.execute(sql);
    const vacation = vacations[0];
    if (!vacation) {
      throw new ResourceNotFoundError(id);
    }
    return vacation;
  }

  public async addVacation(vacation: VacationModel): Promise<VacationModel> {
    vacation.validateInsert();

    // Save image to hard-disk
    const imageName = await fileSaver.add(vacation.image);

    const sql =
      'INSERT INTO vacations(destination, description, startDate, endDate, price, imageName) VALUES(?, ?, ?, ?, ?, ?)';

    const values = [
      vacation.destination,
      vacation.description,
      vacation.startDate,
      vacation.endDate,
      vacation.price,
      imageName,
    ];

    const info: OkPacketParams = await dal.execute(sql, values);

    vacation = await this.getVacationById(info.insertId);

    return vacation;
  }

  public async editVacation(vacation: VacationModel): Promise<VacationModel> {
    vacation.validateUpdate();

    const oldImageName = await this.getImageName(vacation.id);

    const newImageName = vacation.image
      ? await fileSaver.update(oldImageName, vacation.image)
      : oldImageName;

    const sql = `UPDATE vacations SET destination=?, description=?, startDate=?, endDate=?, price=?, imageName=? WHERE id = ?`;
    const values = [
      vacation.destination,
      vacation.description,
      vacation.startDate,
      vacation.endDate,
      vacation.price,
      newImageName,
      vacation.id,
    ];
    const info: OkPacketParams = await dal.execute(sql, values);

    if (info.affectedRows === 0) {
      throw new ResourceNotFoundError(vacation.id);
    }

    vacation = await this.getVacationById(vacation.id);

    return vacation;
  }

  public async deleteVacation(id: number): Promise<void> {
    const oldImageName = await this.getImageName(id);

    const sql = 'DELETE FROM vacations WHERE id = ' + id;
    const info: OkPacketParams = await dal.execute(sql);

    if (info.affectedRows === 0) {
      throw new ResourceNotFoundError(id);
    }

    // Delete image from hard-disk
    await fileSaver.delete(oldImageName);
  }

  private async getImageName(id: number): Promise<string> {
    const sql = `SELECT imageName from vacations WHERE id = '${id}'`;
    const vacations = await dal.execute(sql);
    const vacation = vacations[0];
    const imageName = vacation.imageName;
    return imageName;
  }
}

export const vacationsService = new VacationsService();
