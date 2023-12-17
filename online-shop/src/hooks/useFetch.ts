import { useState, useEffect } from 'react';

export const useFetch = <T>(fnQuery: () => Promise<T>) => {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const data = await fnQuery();
      setResult(data!);
      setIsLoading(false);
    };
    getData();
  }, []);

  return { result, isLoading };
};
