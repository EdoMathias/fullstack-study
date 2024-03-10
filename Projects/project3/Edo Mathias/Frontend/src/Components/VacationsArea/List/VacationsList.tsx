import { useEffect, useState } from 'react';
import { vacationService } from '../../../Services/VacationService';
import './VacationsList.css';
import VacationModel from '../../../Models/VacationModel';
import VacationCard from '../VacationCard/VacationCard';
import Spinner from '../../SharedArea/Spinner/Spinner';
import { notify } from '../../../Utils/Notify';
import useAuthRedirect from '../../../Hooks/useAuthRedirect';
import { useSelector } from 'react-redux';
import { AppState } from '../../../Redux/AppState';

function VacationsList(): JSX.Element {
  const user = useAuthRedirect();
  const vacations = useSelector<AppState, VacationModel[]>(
    (state) => state.vacations
  );

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
    <div className="VacationList">
      {vacations.length === 0 && <Spinner />}

      {vacations.map((vacation) => (
        <VacationCard
          key={vacation.id}
          vacation={vacation}
          roleId={user?.roleId}
        />
      ))}
    </div>
  );
}

export default VacationsList;
