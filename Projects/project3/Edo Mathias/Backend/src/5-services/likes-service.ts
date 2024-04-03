import { dal } from '../2-utils/dal';
import { ValidationError } from '../3-models/client-errors';
import { LikeModel } from '../3-models/like-model';

class LikesService {
  public async addLike(likedVacation: LikeModel): Promise<void> {
    likedVacation.validateInsert();
    const isLiked = await this.isLiked(likedVacation);
    if (isLiked) {
      throw new ValidationError('Vacation is already liked by user.');
    }

    const sql = 'INSERT INTO likes(userId, vacationId) VALUES(?, ?)';
    const values = [likedVacation.userId, likedVacation.vacationId];

    await dal.execute(sql, values);
  }

  public async removeLike(userId: Number, vacationId: Number): Promise<void> {
    const sql = 'DELETE FROM likes WHERE userId = ? AND vacationId = ?';
    const values = [userId, vacationId];

    await dal.execute(sql, values);
  }

  private async isLiked(likedVacation: LikeModel): Promise<boolean> {
    const sql = 'SELECT * FROM likes WHERE userId = ? AND vacationId = ?';
    const values = [likedVacation.userId, likedVacation.vacationId];

    const likes = await dal.execute(sql, values);
    const like = likes[0];

    if (like) {
      return true;
    }

    return false;
  }
}

export const likesService = new LikesService();
