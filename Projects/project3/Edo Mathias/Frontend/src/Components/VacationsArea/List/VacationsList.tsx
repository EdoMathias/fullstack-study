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
import PaginationComponent from '../Pagination/PaginationComponent';

function VacationsList(): JSX.Element {
  const user = useAuthRedirect();
  const vacations = useSelector<AppState, VacationModel[]>(
    (state) => state.vacations
  );
  const [currentPage, setCurrentPage] = useState(1);
  const vacationsPerPage = 9;

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

  // Calculate index of the first and last vacation to display on the current page
  const indexOfLastVacation = currentPage * vacationsPerPage;
  const indexOfFirstVacation = indexOfLastVacation - vacationsPerPage;
  const currentVacations = vacations.slice(
    indexOfFirstVacation,
    indexOfLastVacation
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="vacation-list">
        {vacations.length === 0 && <Spinner />}

        {currentVacations.map((vacation) => (
          <VacationCard
            vacation={vacation}
            roleId={user?.roleId}
            key={vacation.id}
          />
        ))}
      </div>
      <div className="pagination">
        <PaginationComponent
          totalPages={Math.ceil(vacations.length / vacationsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default VacationsList;
