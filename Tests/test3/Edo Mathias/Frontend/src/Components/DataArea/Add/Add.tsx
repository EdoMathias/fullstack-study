import { useState, useEffect } from 'react';
import { dataService } from '../../../Services/DataService';
import { notify } from '../../../Utils/Notify';
import './Add.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TeamModel } from '../../../Models/team-model';
import { MeetingModel } from '../../../Models/meeting-model';

function Add(): JSX.Element {
  const [teams, setTeams] = useState<TeamModel[]>([]);
  const { register, handleSubmit } = useForm<MeetingModel>();
  const navigate = useNavigate();

  useEffect(() => {
    dataService
      .getAllTeams()
      .then((teams) => setTeams(teams))
      .catch((err) => notify.error(err));
  }, []);

  async function send(meeting: MeetingModel) {
    try {
      await dataService.addMeeting(meeting);
      notify.success('Meeting has been added');
      navigate('/list');
    } catch (error: any) {
      notify.error(error);
    }
  }

  return (
    <div className="Add">
      <form onSubmit={handleSubmit(send)}>
        <label>Select Team</label>
        <select
          defaultValue=""
          className="form-control"
          {...register('teamId')}
          required
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

        <label>Starts at:</label>
        <input
          type="datetime-local"
          className="form-control"
          {...register('startDateTime')}
          required
        />

        <label>Ends at:</label>
        <input
          type="datetime-local"
          className="form-control"
          {...register('endDateTime')}
          required
        />

        <label>Description:</label>
        <input
          type="text"
          className="form-control"
          {...register('description')}
          required
        />

        <label>Room to reserve:</label>
        <input type="text" className="form-control" {...register('roomName')} />

        <button className="btn btn-primary">Add meeting</button>
        <NavLink to="/list" className="form-control cancel-button">
          Cancel
        </NavLink>
      </form>
    </div>
  );
}

export default Add;
