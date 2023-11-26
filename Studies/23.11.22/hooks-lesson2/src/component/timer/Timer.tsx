import { useEffect, useState } from 'react';

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number | undefined = undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
    }
    return () => {
      console.log('Clearing interval');
      clearInterval(interval);
    };
  }, [isRunning, timer]);

  return (
    <div>
      <p>{timer}</p>
      <button
        onClick={() => {
          setIsRunning(!isRunning);
        }}
      >
        {isRunning === false ? 'Start' : 'Stop'}
      </button>
      <button
        onClick={() => {
          setTimer(0);
        }}
      >
        Click me
      </button>
    </div>
  );
};
