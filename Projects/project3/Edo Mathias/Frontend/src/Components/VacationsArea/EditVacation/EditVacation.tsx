import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import VacationModel from '../../../Models/VacationModel';
import { vacationService } from '../../../Services/VacationService';
import { notify } from '../../../Utils/Notify';
import { useEffect, useState } from 'react';
import useAuthRedirect from '../../../Hooks/useAuthRedirect';
import styles from './EditVacation.module.css';
import { Skeleton } from '@mui/material';

function EditVacation(): JSX.Element {
  const { register, handleSubmit, watch, setValue } = useForm<VacationModel>();
  const [imageUrl, setImageUrl] = useState<string>();
  const params = useParams();
  const navigate = useNavigate();
  const user = useAuthRedirect();

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

  const startDate = watch('startDate');

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

  function navigateToVacationsList() {
    navigate('/list');
  }

  return (
    <div className="editVacation">
      {user?.roleId === 2 && <></>}
      {user?.roleId === 1 && (
        <form onSubmit={handleSubmit(send)} className="edit-form">
          <div className={styles.editVacationForm}>
            <h1 className={styles.editVacationHeader}>Edit Vacation</h1>
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
                min={startDate}
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
              {imageUrl ? (
                <div>
                  <img
                    src={imageUrl}
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
                required
              />
            </div>

            <div className={styles.buttonsContainer}>
              <button onClick={navigateToVacationsList}>Cancel</button>
              <button>Update</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default EditVacation;
