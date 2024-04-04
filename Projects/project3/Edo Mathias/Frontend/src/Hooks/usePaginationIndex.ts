import VacationModel from '../Models/VacationModel';

function usePaginationIndex(
  currentPage: number,
  sortedVacations: VacationModel[]
) {
  const indexOfLastVacation = currentPage * 9;
  const indexOfFirstVacation = indexOfLastVacation - 9;
  const currentVacations = sortedVacations.slice(
    indexOfFirstVacation,
    indexOfLastVacation
  );
  return currentVacations;
}

export default usePaginationIndex;
