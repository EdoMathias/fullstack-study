import { useState, useEffect } from 'react';
import { getCategories } from '../services/categories-service';
import { Category } from '../types/types';

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
