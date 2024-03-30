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
} from '@mui/material';
import usePageinationIndex from '../../../Hooks/usePaginationIndex';

function VacationsList(): JSX.Element {
  const user = useAuthRedirect();
  const vacations = useSelector<AppState, VacationModel[]>(
    (state) => state.vacations
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [sortedVacations, setSortedVacations] = useState<VacationModel[]>([]);
  const [sortValue, setSortValue] = useState('');

  useEffect(() => {
    const fetchVacations = async () => {
      try {
        await vacationService.getAllVacations();
        setSortedVacations(vacations);
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

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value);
  };

  const sortVacations = (sortValue: string) => {
    let sorted;
    switch (sortValue) {
      case 'likes':
        sorted = [...vacations].sort((a, b) => b.likesCount - a.likesCount);
        setSortValue('likes');
        break;
      case 'liked':
        sorted = vacations.filter((vacation) => vacation.isLiked);
        setSortValue('liked');
        break;
      case 'dates':
        sorted = [...vacations].filter(
          (vacation) => new Date(vacation.endDate) > new Date()
        );
        break;
      default:
        sorted = vacations;
    }
    setSortedVacations(sorted);
  };

  return (
    <div className="list-container">
      {user?.roleId === 2 && (
        <FormControl sx={{ width: 150, marginTop: 2 }}>
          <InputLabel id="sort-label">Sort By</InputLabel>
          <Select
            labelId="sort-label"
            id="sort"
            defaultValue=""
            onChange={(event) => {
              handleSortChange(event);
              return sortVacations(event.target.value);
            }}
          >
            <MenuItem value="">All vacations</MenuItem>
            <MenuItem value="likes">Likes Count</MenuItem>
            <MenuItem value="liked">Liked</MenuItem>
            <MenuItem value="dates">Upcoming</MenuItem>
          </Select>
        </FormControl>
      )}
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
