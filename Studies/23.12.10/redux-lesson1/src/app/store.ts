import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/count-slice';

export const store = configureStore({
  reducer: {
    conter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
