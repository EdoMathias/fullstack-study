import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import VacationModel from '../../../Models/VacationModel';
import { vacationService } from '../../../Services/VacationService';
import './AddVacation.css';
import { notify } from '../../../Utils/Notify';
import useAuthRedirect from '../../../Hooks/useAuthRedirect';
import { ChangeEvent, useState } from 'react';

function AddVacation(): JSX.Element {
  const { register, handleSubmit } = useForm<VacationModel>();
  const user = useAuthRedirect();

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

  function navigateToVacationsList() {
    navigate('/list');
  }

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="AddVacation">
      {user?.roleId === 2 && <></>}
      {user?.roleId === 1 && (
        <form onSubmit={handleSubmit(send)} className="add-form">
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
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Uploaded Preview"
              className="preview-image"
            />
          )}
          <input
            type="file"
            {...register('image')}
            onChange={handleImageChange}
            required
          />

          <div className="buttons-container">
            <button onClick={navigateToVacationsList}>Cancel</button>
            <button>Add</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddVacation;
