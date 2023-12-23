import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../features/card-slice';
import userReducer from '../features/auth-slice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
