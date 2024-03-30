import { Button, ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import VacationModel from '../../../Models/VacationModel';
import { AppState } from '../../../Redux/AppState';
import { dataService } from '../../../Services/DataService';
import { notify } from '../../../Utils/Notify';

const adminActionsTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Mantinia Regular',
          color: '#E2C799',
          border: '1px solid #E2C799',
          backgroundColor: '#3D405B',
          '&:hover': {
            backgroundColor: '#E2C799',
            color: '#3D405B',
          },
        },
      },
    },
  },
});

function AdminActions(): JSX.Element {
  const vacations = useSelector<AppState, VacationModel[]>(
    (state) => state.vacations
  );

  async function handleDownloadCSV() {
    try {
      await dataService.downloadCSV(vacations);
      notify.success('CSV file downloaded successfully');
    } catch (error: any) {
      notify.error(error.message);
    }
  }

  return (
    <ThemeProvider theme={adminActionsTheme}>
      <div className="admin-actions">
        <Button size="large" onClick={handleDownloadCSV}>
          Download as CSV
        </Button>
        <Button size="large">Charts</Button>
      </div>
    </ThemeProvider>
  );
}

export default AdminActions;
