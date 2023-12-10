import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ProductsState {
  products: Record<string, number>;
}

const initialState: ProductsState = {
  products: {},
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(
      state,
      action: PayloadAction<{ productId: string; amount: number }>
    ) {
      state.products[action.payload.productId] =
        state.products[action.payload.productId] === undefined
          ? (state.products[action.payload.productId] = action.payload.amount)
          : (state.products[action.payload.productId] = action.payload
              .amount++);
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
