import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { appStore } from '../../../Redux/Store';
import { vacationsActionCreators } from '../../../Redux/VacationsSlice';

interface UserActionsProps {
  onSortByValueChanged: (sortByValue: string) => void;
}

function UserActions(props: UserActionsProps) {
  const [sortBy, setSortBy] = useState<string>('');

  const handleSortChange = (event: SelectChangeEvent) => {
    const sortValue = event.target.value;
    setSortBy(sortValue);
    props.onSortByValueChanged(sortValue);
    const action = vacationsActionCreators.sortVacations(sortValue);
    appStore.dispatch(action);
  };

  return (
    <ThemeProvider theme={userActionsTheme}>
      <FormControl>
        <Select
          sx={{ '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' } }}
          id="sort"
          defaultValue=""
          onChange={(event) => handleSortChange(event)}
          value={sortBy}
          displayEmpty
        >
          <MenuItem value="">All vacations</MenuItem>
          <MenuItem value="likes">Likes Count</MenuItem>
          <MenuItem value="liked">Liked</MenuItem>
          <MenuItem value="dates">Upcoming</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}

const userActionsTheme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: 150,
          marginTop: 2,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#E2C799',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          border: '1px solid #E2C799',
          color: '#E2C799',
          backgroundColor: '#3D405B', // Change background color of select box
          '&:focus': {
            borderColor: '#3D405B', // Changed border color when focused
            backgroundColor: '#3D405B',
          },
        },
        icon: {
          fill: '#E2C799',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#E2C799',
          '&:hover': {
            backgroundColor: '#E2C799',
            color: '#3D405B',
          },
          '&.Mui-selected': {
            backgroundColor: '#E2C799', // Change background color of selected item
            color: '#3D405B', // Change color of selected item
            '&:hover': {
              backgroundColor: '#E2C799',
              color: '#3D405B',
            },
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: '#3D405B', // Change background color of dropdown list
        },
      },
    },
  },
});

export default UserActions;
