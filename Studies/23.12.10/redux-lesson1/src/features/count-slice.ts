import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CountState {
  value: number;
}

const initialState: CountState = { value: 0 };

const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrementByAmount(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
  },
});

export const { decrement, decrementByAmount, increment, incrementByAmount } =
  countSlice.actions;

export default countSlice.reducer;
