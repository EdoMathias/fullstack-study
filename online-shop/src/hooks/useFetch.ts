import { useState, useEffect } from 'react';

export const useFetch = <T>(fnQuery: () => Promise<T>) => {
  const [result, setResult] = useState<T | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fnQuery();
      setResult(data!);
    };
    getData();
  }, []);

  return result;
};
