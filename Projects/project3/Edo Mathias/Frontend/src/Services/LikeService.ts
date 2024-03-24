import axios from 'axios';
import VacationModel from '../Models/VacationModel';
import { appConfig } from '../Utils/AppConfig';
import { appStore } from '../Redux/Store';
import { vacationsActionCreators } from '../Redux/VacationsSlice';
// import { authActionCreators, authReducersContainer } from '../Redux/AuthSlice';
// import LikeModel from '../Models/like-model';

class LikesService {
  // Add like:
  public async addLike(vacation: VacationModel): Promise<void> {
    const likedVacation = {
      userId: appStore.getState().user.id,
      vacationId: vacation.id,
    };

    await axios.post<VacationModel>(
      appConfig.likeUrl,
      likedVacation,
      appConfig.axiosOptions
    );
  }

  // Remove like:
  public async removeLike(vacation: VacationModel): Promise<void> {
    const userId = appStore.getState().user.id;
    const vacationId = vacation.id;

    await axios.delete(appConfig.likeUrl + `${userId}/${vacationId}`);
  }
}

export const likesService = new LikesService();
