import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme } from '@mui/material';

interface PaginationComponentProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const paginationTheme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          fontFamily: 'Mantinia Regular',
          color: '#E2C799',
          '& .MuiPaginationItem-root': {
            border: '1px solid #E2C799',
            backgroundColor: '#3D405B',
            '&:hover': {
              backgroundColor: '#E2C799',
              color: '#3D405B',
            },
          },
          '& .Mui-selected': {
            backgroundColor: '#E2C799',
            color: '#3D405B',
            '&:hover': {
              backgroundColor: '#E2C799',
              color: '#3D405B',
            },
          },
        },
      },
    },
  },
});

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
    <ThemeProvider theme={paginationTheme}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </ThemeProvider>
  );
};

export default PaginationComponent;
