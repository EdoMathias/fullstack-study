import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import VacationModel from '../Models/VacationModel';

// Our slice's data is vacations array.

// Define the original state variable
let originalVacations: VacationModel[] = [];

// Reducer for adding all vacations to the slice:
function initAll(
  currentState: VacationModel[],
  action: PayloadAction<VacationModel[]>
): VacationModel[] {
  // action.payload is all vacations fetched from backend.
  const allVacations = action.payload;

  originalVacations = allVacations;

  const newState = allVacations;
  return newState;
}

// Reducer for adding one vacation to the slice:
function addOne(
  currentState: VacationModel[],
  action: PayloadAction<VacationModel>
): VacationModel[] {
  // action.payload is the vacation object to add.
  const addedVacation = action.payload;

  // Check if the vacation already exists in the state by ID
  const existingVacationIndex = currentState.findIndex(
    (vacation) => vacation.id === addedVacation.id
  );

  // If the vacation is not already in the state, add it
  if (existingVacationIndex === -1) {
    const newState = [...currentState, addedVacation];
    return newState;
  }

  // If the vacation already exists, update it in the state
  const newState = [...currentState];
  newState[existingVacationIndex] = addedVacation;
  return newState;
}

// Reducer for updating one vacation in the slice:
function updateOne(
  currentState: VacationModel[],
  action: PayloadAction<VacationModel>
): VacationModel[] {
  // action.payload is a single vacation to update.
  const vacationToUpdate = action.payload;
  const newState = [...currentState];
  const index = newState.findIndex((p) => p.id === vacationToUpdate.id);
  if (index >= 0) newState[index] = vacationToUpdate;
  return newState;
}

// Reducer for deleting one vacation from the slice:
function deleteOne(
  currentState: VacationModel[],
  action: PayloadAction<number>
): VacationModel[] {
  // action.payload is the id of the vacation to delete.
  const idToDelete = action.payload;
  const newState = [...currentState];
  const index = newState.findIndex((p) => p.id === idToDelete);
  if (index >= 0) newState.splice(index, 1); // 1 = how many to delete
  return newState;
}

// Reducer for liking one vacation from the slice:
function addLike(
  currentState: VacationModel[],
  action: PayloadAction<number>
): void {
  // action.payload is the id of the vacation to like.
  const idToLike = action.payload;
  const vacation = currentState.find((v) => v.id === idToLike);
  if (vacation) {
    vacation.likesCount += 1;
    vacation.isLiked = 1;
  }
}

// Reducer for removing like from one vacation from the slice:
function removeLike(
  currentState: VacationModel[],
  action: PayloadAction<number>
): void {
  // action.payload is the id of the vacation to like.
  const idToLike = action.payload;
  const vacation = currentState.find((v) => v.id === idToLike);
  if (vacation) {
    vacation.likesCount -= 1;
    vacation.isLiked = 0;
  }
}

// Reducer for sorting vacations:
function sortVacations(
  currentState: VacationModel[], // Unused parameter
  action: PayloadAction<string>
): VacationModel[] {
  // action.payload is the sorting value
  const sortValue = action.payload;
  let sorted: VacationModel[];

  switch (sortValue) {
    case 'likes':
      sorted = [...originalVacations].sort(
        (a, b) => b.likesCount - a.likesCount
      );
      break;
    case 'liked':
      sorted = originalVacations.filter((vacation) => vacation.isLiked);
      break;
    case 'dates':
      sorted = originalVacations.filter(
        (vacation) => new Date(vacation.endDate) > new Date()
      );
      break;
    default:
      sorted = [...originalVacations]; // No sorting, return original state
  }

  return sorted;
}

// Create the vacations slice - containing and managing only the vacations array:
const vacationsSlice = createSlice({
  name: 'vacations', // Unique name for the slice
  initialState: [],
  reducers: {
    initAll,
    addOne,
    updateOne,
    deleteOne,
    addLike,
    removeLike,
    sortVacations,
  },
});

// Expose a single object containing functions for creating Action objects:
export const vacationsActionCreators = vacationsSlice.actions;

// Expose a single object containing all reducers:
export const vacationsReducersContainer = vacationsSlice.reducer;
