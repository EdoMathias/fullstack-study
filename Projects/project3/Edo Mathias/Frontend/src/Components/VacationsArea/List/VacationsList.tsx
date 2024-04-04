import { useEffect, useMemo, useState } from 'react';
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
import usePaginationIndex from '../../../Hooks/usePaginationIndex';
import AdminActions from '../ListActions/AdminActions';
import UserActions from '../ListActions/UserActions';

function VacationsList(): JSX.Element {
  const user = useAuthRedirect();
  const vacations = useSelector<AppState, VacationModel[]>(
    (state) => state.vacations
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('');

  const sortedVacations = useMemo(() => {
    let sorted: VacationModel[];

    switch (sortBy) {
      case 'likes':
        sorted = [...vacations].sort((a, b) => b.likesCount - a.likesCount);
        break;
      case 'liked':
        sorted = vacations.filter((vacation) => vacation.isLiked);
        break;
      case 'dates':
        sorted = vacations.filter(
          (vacation) => new Date(vacation.endDate) > new Date()
        );
        break;
      default:
        sorted = vacations; // No sorting, return original state
    }

    return sorted;
  }, [vacations, sortBy]);

  useEffect(() => {
    const fetchVacations = async () => {
      try {
        await vacationService.getAllVacations();
      } catch (error) {
        notify.error('Failed to fetch vacations');
      }
    };
    fetchVacations();
  }, [vacations]);

  // Calculate index of the first and last vacation to display on the current page
  const currentVacations = usePaginationIndex(currentPage, sortedVacations);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortByChange = (sortByValue: string) => {
    setSortBy(sortByValue);
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
