import VacationModel from '../Models/VacationModel';

function usePageinationIndex(
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

export default usePageinationIndex;
