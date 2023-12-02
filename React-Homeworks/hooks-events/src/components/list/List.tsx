import { useEffect, useState } from 'react';
import { ListData } from '../../types/item';

interface ListProps {
  data: ListData[];
  move: () => void;
}

export const List = ({ data, move }: ListProps) => {
  const [dataArray, setdataArray] = useState<ListData[] | null>(null);

  useEffect(() => {
    setdataArray(data);
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => dataArray && dataArray.length > 0 && move()}>
        Move Last Item
      </button>
    </div>
  );
};
