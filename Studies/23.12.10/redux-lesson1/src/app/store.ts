import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/count-slice';
import productReducer from '../features/product-slice';

export const store = configureStore({
  reducer: {
    conter: counterReducer,
    product: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
