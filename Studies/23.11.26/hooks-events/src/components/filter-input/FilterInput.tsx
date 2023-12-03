import { useState } from 'react';

interface FilterProps {
  onFilter: (searchValue: string) => void;
}

export const FilterInput = ({ onFilter }: FilterProps) => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={() => onFilter(search)}>Search</button>
    </div>
  );
};
