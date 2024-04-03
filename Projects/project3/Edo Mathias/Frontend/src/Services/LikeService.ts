import axios from 'axios';
import VacationModel from '../Models/VacationModel';
import { appConfig } from '../Utils/AppConfig';
import { appStore } from '../Redux/Store';
import { vacationsActionCreators } from '../Redux/VacationsSlice';

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

    const action = vacationsActionCreators.addLike(vacation.id);

    appStore.dispatch(action);
  }

  // Remove like:
  public async removeLike(vacation: VacationModel): Promise<void> {
    const userId = appStore.getState().user.id;
    const vacationId = vacation.id;

    await axios.delete(appConfig.likeUrl + `${userId}/${vacationId}`);

    const action = vacationsActionCreators.removeLike(vacation.id);

    appStore.dispatch(action);
  }
}

export const likesService = new LikesService();
