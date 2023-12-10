// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../app/store';
import { useState } from 'react';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from '../../features/count-slice';
import { useAppDispatch, useAppSelecetor } from '../../app/hooks';

export const Counter = () => {
  //   const count = useSelector((state: RootState) => state.conter.value);
  //   const dispatch = useDispatch();
  const count = useAppSelecetor((state) => state.conter.value);
  const dispatch = useAppDispatch();
  const [incrementBy, setIncrementBy] = useState('2');
  const incrementValue = Number(incrementBy) || 0;

  return (
    <div>
      <h1>Counter using REDUX:</h1>
      <h2>Counter value: {count}</h2>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Increment by: {incrementValue}
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(decrementByAmount(incrementValue))}>
          Decrement by: {incrementValue}
        </button>
        <br />
        <input
          type="text"
          onChange={(e) => {
            setIncrementBy(e.target.value);
          }}
          value={incrementValue}
        ></input>
      </div>
    </div>
  );
};
