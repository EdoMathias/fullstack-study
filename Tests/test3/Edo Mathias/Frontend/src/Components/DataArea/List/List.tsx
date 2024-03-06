import { ChangeEvent, useEffect, useState } from 'react';
import './List.css';
import { MeetingModel } from '../../../Models/meeting-model';
import { TeamModel } from '../../../Models/team-model';
import { dataService } from '../../../Services/DataService';
import { notify } from '../../../Utils/Notify';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import MeetingCard from '../MeetingCard/MeetingCard';
import { NavLink } from 'react-router-dom';

function List(): JSX.Element {
  const [teams, setTeams] = useState<TeamModel[]>([]);
  const [currentTeam, setCurrentTeam] = useState<TeamModel>();
  const [meetings, setMeetings] = useState<MeetingModel[]>([]);

  useEffect(() => {
    dataService
      .getAllTeams()
      .then((teams) => {
        setTeams(teams);
      })
      .catch((error: any) => notify.error(error));
  }, []);

  const displayMeetings = async (args: ChangeEvent<HTMLSelectElement>) => {
    try {
      const select = args.target;
      const teamId = +select.value;
      const meetings = await dataService.getMeetingsByTeam(teamId);
      const team = teams.filter((team) => team.id === teamId)[0];
      setMeetings(meetings);
      setCurrentTeam(team);
    } catch (error: any) {
      notify.error(error);
    }
  };

  return (
    <div className="List">
      <div className="buttons">
        <select
          defaultValue=""
          onChange={displayMeetings}
          className="form-control w-25 m-5 mx-auto"
        >
          <option value="" disabled>
            Select team
          </option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>

        <NavLink
          to="/new"
          className="form-control w-25 m-5 mx-auto button-style"
        >
          New Meeting
        </NavLink>
      </div>

      <div className="card-container">
        {meetings.map((meeting, index) => (
          <MeetingCard
            key={index}
            meeting={meeting}
            currentTeam={currentTeam}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
