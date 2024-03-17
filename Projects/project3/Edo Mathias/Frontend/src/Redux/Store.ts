import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./AppState";
import { authReducersContainer } from "./AuthSlice";
import { vacationsReducersContainer } from "./VacationsSlice";

// Creating the application store - the redux manager object: 
export const appStore = configureStore<AppState>({
    reducer: {
        vacations: vacationsReducersContainer,
        user: authReducersContainer
    }
});

