import axios from 'axios';
import { TeamModel } from '../Models/team-model';
import { appConfig } from '../Utils/AppConfig';
import { MeetingModel } from '../Models/meeting-model';

class DataService {
  public async getAllTeams(): Promise<TeamModel[]> {
    const response = await axios.get<TeamModel[]>(appConfig.teamsUrl);
    const teams = response.data;
    return teams;
  }

  public async getMeetingsByTeam(teamId: Number): Promise<MeetingModel[]> {
    const response = await axios.get<MeetingModel[]>(
      appConfig.meetingsByTeamUrl + teamId
    );
    const meetings = response.data;
    return meetings;
  }

  public async addMeeting(meeting: MeetingModel): Promise<void> {
    const response = await axios.post<MeetingModel>(
      appConfig.meetingsUrl,
      meeting,
      appConfig.axiosOptions
    );
    const addedMeeting = response.data;
  }
}

export const dataService = new DataService();
