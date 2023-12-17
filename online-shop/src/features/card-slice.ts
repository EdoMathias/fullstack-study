import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/types';

interface CardState {
  products: Record<string, { product: Product; amount: number }>;
}

const initialState: CardState = {
  products: {},
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      const productId = action.payload.id;

      state.products[productId] = {
        product: action.payload,
        amount:
          state.products[productId]?.amount !== undefined
            ? state.products[productId].amount + 1
            : 1,
      };
    },
  },
});

export const { addProduct } = cardSlice.actions;
export default cardSlice.reducer;
