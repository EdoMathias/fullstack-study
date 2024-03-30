import { useEffect, useState } from 'react';
import { vacationService } from '../../../Services/VacationService';
import './VacationsList.css';
import VacationModel from '../../../Models/VacationModel';
import VacationCard from '../VacationCard/VacationCard';
import { notify } from '../../../Utils/Notify';
import useAuthRedirect from '../../../Hooks/useAuthRedirect';
import { useSelector } from 'react-redux';
import { AppState } from '../../../Redux/AppState';
import PaginationComponent from '../Pagination/PaginationComponent';
import Skeleton from '@mui/material/Skeleton';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from '@mui/material';
import usePageinationIndex from '../../../Hooks/usePaginationIndex';
import { appStore } from '../../../Redux/Store';
import { vacationsActionCreators } from '../../../Redux/VacationsSlice';
import AdminActions from '../ListActions/AdminActions';
import UserActions from '../ListActions/UserActions';

function VacationsList(): JSX.Element {
  const user = useAuthRedirect();
  const vacations = useSelector<AppState, VacationModel[]>(
    (state) => state.vacations
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortedVacations, setSortedVacations] = useState<VacationModel[]>([]);

  useEffect(() => {
    const fetchVacations = async () => {
      try {
        const sorted = await vacationService.getAllVacations();
        setSortedVacations(sorted);
      } catch (error) {
        notify.error('Failed to fetch vacations');
      }
    };
    fetchVacations();
  }, [vacations]);

  // Calculate index of the first and last vacation to display on the current page
  const currentVacations = usePageinationIndex(currentPage, sortedVacations);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortByChange = (soryByValue: string) => {
    setSortBy(soryByValue);
  };

  return (
    <div className="list-container">
      <div className="list-actions-container">
        {user?.roleId === 1 && <AdminActions />}

        {user?.roleId === 2 && (
          <UserActions onSortByValueChanged={handleSortByChange} />
        )}
      </div>
      <div className="vacation-list">
        {/* Display Skeleton components while loading */}
        {vacations.length === 0 &&
          Array.from({ length: 9 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              height={240}
              width={340}
            />
          ))}
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
          totalPages={Math.ceil(sortedVacations.length / 9)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default VacationsList;
