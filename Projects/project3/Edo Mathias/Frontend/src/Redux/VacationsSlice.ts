import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import VacationModel from "../Models/VacationModel";

// Our slice's data is products array.

// Reducer for adding all products to the slice: 
function initAll(currentState: VacationModel[], action: PayloadAction<VacationModel[]>): VacationModel[] {
    // action.payload is all products fetched from backend.
    const allVacations = action.payload;
    const newState = allVacations;
    return newState;
}

// Reducer for adding one product to the slice:  
function addOne(currentState: VacationModel[], action: PayloadAction<VacationModel>): VacationModel[] {
    // action.payload is a single product to add.
    const vacationToAdd = action.payload;
    const newState = [...currentState, vacationToAdd];
    return newState;
}

// Reducer for updating one product in the slice:  
function updateOne(currentState: VacationModel[], action: PayloadAction<VacationModel>): VacationModel[] {
    // action.payload is a single product to update.
    const vacationToUpdate = action.payload;
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === vacationToUpdate.id);
    if(index >= 0) newState[index] = vacationToUpdate;
    return newState;
}

// Reducer for deleting one product from the slice:  
function deleteOne(currentState: VacationModel[], action: PayloadAction<number>): VacationModel[] {
    // action.payload is the id of the product to delete.
    const idToDelete = action.payload;
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === idToDelete);
    if(index >= 0) newState.splice(index, 1); // 1 = how many to delete
    return newState;
}

// Create the products slice - containing and managing only the products array: 
const vacationsSlice = createSlice({
    name: "vacations", // Unique name for the slice
    initialState: [],
    reducers: { initAll, addOne, updateOne, deleteOne }
});

// Expose a single object containing functions for creating Action objects:
export const productActionCreators = vacationsSlice.actions;

// Expose a single object containing all reducers:
export const vacationsReducersContainer = vacationsSlice.reducer;
