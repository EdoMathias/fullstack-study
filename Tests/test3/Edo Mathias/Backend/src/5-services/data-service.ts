import { dal } from '../2-utils/dal';
import { OkPacketParams } from 'mysql2';
import { TeamModel } from '../3-models/team-model';
import { MeetingModel } from '../3-models/meeting-model';
import { ValidationError } from '../3-models/client-errors';

class DataService {
  public async getAllTeams(): Promise<TeamModel[]> {
    const sql = 'SELECT * FROM teams';

    const teams = await dal.execute(sql);
    return teams;
  }

  public async getMeetingsByTeam(teamId: number): Promise<MeetingModel[]> {
    const sql = 'SELECT * FROM meetings WHERE teamId = ?';
    const values = [teamId];

    const meetings = await dal.execute(sql, values);
    return meetings;
  }

  public async addMeeting(meeting: MeetingModel): Promise<MeetingModel> {
    meeting.validateInsert();
    const isTaken = await this.isTimeTaken(meeting);
    if (isTaken) {
      throw new ValidationError('Time is already taken');
    }

    const sql =
      'INSERT INTO meetings(teamId, startDateTime, endDateTime, description, roomName) VALUES(?, ?, ?, ?, ?)';
    const values = [
      meeting.teamId,
      meeting.startDateTime,
      meeting.endDateTime,
      meeting.description,
      meeting.roomName,
    ];

    const info: OkPacketParams = await dal.execute(sql, values);
    meeting.id = info.insertId;
    return meeting;
  }

  private async isTimeTaken(meeting: MeetingModel) {
    const sql =
      'SELECT * FROM meetings WHERE startDateTime = ? AND endDateTime = ? AND teamId = ?';
    const values = [meeting.startDateTime, meeting.endDateTime, meeting.teamId];

    const meetings = await dal.execute(sql, values);

    if (meetings.length >= 1) {
      return true;
    } else {
      return false;
    }
  }
}

export const dataService = new DataService();
