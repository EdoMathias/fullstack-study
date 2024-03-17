import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationProps } from '@mui/material/Pagination';

interface PaginationComponentProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    onPageChange(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={handleChange}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default PaginationComponent;
