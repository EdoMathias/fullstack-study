import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import VacationModel from '../../../Models/VacationModel';
import { vacationService } from '../../../Services/VacationService';
import './AddVacation.css';
import { notify } from '../../../Utils/Notify';
import { useDispatch, useSelector } from 'react-redux';
import { vacationsActionCreators } from '../../../Redux/VacationsSlice';
import { AppState } from '../../../Redux/AppState';
import { useEffect } from 'react';

function AddVacation(): JSX.Element {
  const { register, handleSubmit } = useForm<VacationModel>();

  const navigate = useNavigate();

  async function send(vacation: VacationModel) {
    try {
      // Extract first image from FileList into vacation.image:
      vacation.image = (vacation.image as unknown as FileList)[0];

      // Send vacation to backend:
      await vacationService.addVacation(vacation);

      notify.success('Vacation has been added.');

      navigate('/list');
    } catch (err: any) {
      notify.error(err);
    }
  }

  useEffect(() => {
    const fetchVacations = async () => {
      try {
        await vacationService.getAllVacations();
      } catch (error) {
        notify.error('Failed to fetch vacations');
      }
    };

    fetchVacations();
  }, []);

  return (
    <div className="AddVacation">
      <form onSubmit={handleSubmit(send)}>
        <label>Destination: </label>
        <input
          type="text"
          {...register('destination')}
          required
          minLength={2}
          maxLength={50}
        />

        <label>Description: </label>
        <textarea
          className="description-box"
          {...register('description')}
          required
          minLength={2}
          maxLength={1000}
        />

        <label>Start Date: </label>
        <input type="date" {...register('startDate')} required />

        <label>End Date: </label>
        <input type="date" {...register('endDate')} required />

        <label>Price: </label>
        <input
          type="number"
          step="0.01"
          {...register('price')}
          required
          min={0}
          max={10000}
        />

        <label>Image: </label>
        <input type="file" {...register('image')} required />

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddVacation;
