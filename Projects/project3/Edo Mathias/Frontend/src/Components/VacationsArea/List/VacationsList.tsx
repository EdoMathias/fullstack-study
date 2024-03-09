import { useEffect, useState } from 'react';
import { vacationService } from '../../../Services/VacationService';
import './VacationsList.css';
import VacationModel from '../../../Models/VacationModel';
import VacationCard from '../VacationCard/VacationCard';
import Spinner from '../../SharedArea/Spinner/Spinner';
import { notify } from '../../../Utils/Notify';
import useAuthRedirect from '../../../Hooks/useAuthRedirect';

function VacationsList(): JSX.Element {
  const [vacations, setVacations] = useState<VacationModel[]>([]);
  const user = useAuthRedirect();

  useEffect(() => {
    if (!user) {
      return;
    }
    vacationService
      .getAllVacations()
      .then((vacations) => setVacations([...vacations]))
      .catch((err) => notify.error(err.message));
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
