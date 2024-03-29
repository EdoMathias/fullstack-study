import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import VacationModel from '../../../Models/VacationModel';
import { vacationService } from '../../../Services/VacationService';
import './EditVacation.css';
import { notify } from '../../../Utils/Notify';
import { useEffect, useState } from 'react';
import useDateFormat from '../../../Hooks/useDateFormat';

function EditVacation(): JSX.Element {
  const { register, handleSubmit, setValue } = useForm<VacationModel>();
  const [imageUrl, setImageUrl] = useState<string>();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    vacationService
      .getOneVacation(+params.id)
      .then((vacation) => {
        setValue('destination', vacation.destination);
        setValue('description', vacation.description);
        setValue('startDate', formatDate(vacation.startDate));
        setValue('endDate', formatDate(vacation.endDate));
        setValue('price', vacation.price);
        setImageUrl(vacation.imageUrl);
      })
      .catch((err) => notify.error(err));
  }, []);

  const formatDate = (stringDate: string) => {
    const date = new Date(stringDate);
    const timezoneOffset = date.getTimezoneOffset();
    const localTimeDate = new Date(date.getTime() - timezoneOffset * 60 * 1000);
    return localTimeDate.toISOString().split('T')[0];
  };

  async function send(vacation: VacationModel) {
    try {
      vacation.image = (vacation.image as unknown as FileList)[0];
      vacation.id = +params.id;

      await vacationService.updateVacation(vacation);

      notify.success('Vacation has been added.');
      navigate('/list');
    } catch (err: any) {
      notify.error(err);
    }
  }

  return (
    <div className="editVacation">
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
        <input type="date" {...register('startDate')} />

        <label>End Date: </label>
        <input type="date" {...register('endDate')} />

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
        <img className="thumbnail" src={imageUrl} />
        <input type="file" {...register('image')} />

        <button>Update</button>
      </form>
    </div>
  );
}

export default EditVacation;
