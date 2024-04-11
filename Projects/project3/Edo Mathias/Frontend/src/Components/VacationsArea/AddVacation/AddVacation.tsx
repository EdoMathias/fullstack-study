import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import VacationModel from '../../../Models/VacationModel';
import { vacationService } from '../../../Services/VacationService';
import { notify } from '../../../Utils/Notify';
import useAuthRedirect from '../../../Hooks/useAuthRedirect';
import { useState } from 'react';
import { Skeleton } from '@mui/material';
import styles from './AddVacation.module.css';

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
        <form onSubmit={handleSubmit(send)}>
          <div className={styles.addVacationForm}>
            <h1 className={styles.addVacationHeader}>Add Vacation</h1>
            <div className={styles.fieldContainer}>
              <label>Destination: </label>
              <input
                className={styles.inputFields}
                type="text"
                {...register('destination')}
                minLength={2}
                maxLength={50}
                required
              />
            </div>

            <div className={styles.fieldContainer}>
              <label>Description: </label>
              <textarea
                className={styles.descriptionBox}
                {...register('description')}
                minLength={2}
                maxLength={1000}
                required
              />
            </div>

            <div className={styles.fieldContainer}>
              <label>Start Date: </label>
              <input
                className={styles.inputFields}
                type="date"
                {...register('startDate')}
                required
              />
            </div>

            <div className={styles.fieldContainer}>
              <label>End Date: </label>
              <input
                className={styles.inputFields}
                type="date"
                {...register('endDate')}
                required
              />
            </div>

            <div className={styles.fieldContainer}>
              <label>Price: </label>
              <input
                className={styles.inputFields}
                type="number"
                step="0.01"
                {...register('price')}
                required
                min={0}
                max={10000}
              />
            </div>

            <div className={styles.fieldContainer}>
              <label>Image: </label>
              {imagePreview ? (
                <div>
                  <img
                    src={imagePreview}
                    alt="Uploaded Preview"
                    className={styles.previewImage}
                  />
                </div>
              ) : (
                <Skeleton
                  animation="wave"
                  height={80}
                  width={370}
                  variant="rectangular"
                />
              )}
              <input
                className={styles.inputFields}
                type="file"
                {...register('image')}
                onChange={handleImageChange}
                required
              />
            </div>

            <div className={styles.buttonsContainer}>
              <button onClick={navigateToVacationsList}>Cancel</button>
              <button>Add</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddVacation;
