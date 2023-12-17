import { useState, useEffect } from 'react';

export const useFetch = (fnQuery: () => Promise<any>) => {
  const [result, setResult] = useState<any[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fnQuery();
      setResult(data!);
    };
    getData();
  }, []);

  return result;
};
