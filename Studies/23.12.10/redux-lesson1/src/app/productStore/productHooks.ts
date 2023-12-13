import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './productStore';

export const useProductAppDispatch = () => useDispatch<AppDispatch>();
export const useProductAppSelecetor: TypedUseSelectorHook<RootState> =
  useSelector;
