import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../../features/product-slice';

export const productStore = configureStore({
  reducer: {
    product: productReducer,
  },
});

export type AppDispatch = typeof productStore.dispatch;
export type RootState = ReturnType<typeof productStore.getState>;
