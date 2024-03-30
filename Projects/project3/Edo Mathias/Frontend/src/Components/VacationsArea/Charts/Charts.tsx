import { BarChart } from '@mui/x-charts/BarChart';
import { useSelector } from 'react-redux';
import VacationModel from '../../../Models/VacationModel';
import { AppState } from '../../../Redux/AppState';
import { ThemeProvider } from '@emotion/react';
import { Button, Skeleton, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Charts.css';
import { vacationService } from '../../../Services/VacationService';
import { notify } from '../../../Utils/Notify';
import { useEffect } from 'react';
import useAuthRedirect from '../../../Hooks/useAuthRedirect';

function VacationsCharts() {
  const navigate = useNavigate();
  const vacations = useSelector<AppState, VacationModel[]>(
    (state) => state.vacations
  );
  const user = useAuthRedirect();

  const chartSetting = {
    width: 800,
    height: 800,
    margin: { left: 100 },
  };

  const dataSet = vacations?.map((vacation) => ({
    destination: vacation.destination,
    likesCount: vacation.likesCount,
  }));

  useEffect(() => {
    const fetchVacations = async () => {
      try {
        await vacationService.getAllVacations();
      } catch (error) {
        notify.error('Failed to fetch vacations');
      }
    };
    fetchVacations();
  }, []);

  function navigateToVacationsList() {
    navigate('/list');
  }

  return (
    <ThemeProvider theme={chartsPageTheme}>
      <div className="charts-page-container">
        {user?.roleId === 2 && <></>}
        {user?.roleId === 1 && (
          <>
            <Button size="large" onClick={navigateToVacationsList}>
              Home
            </Button>

            {/* Display Skeleton components while loading */}
            {vacations.length === 0 && (
              <Skeleton
                key="chart-skeleton"
                variant="rectangular"
                height={800}
                width={800}
                animation="wave"
              />
            )}

            {/* Display chart only if vacations is not null */}
            {vacations.length > 0 && (
              <BarChart
                dataset={dataSet}
                yAxis={[
                  {
                    dataKey: 'destination',
                    label: 'Destination',
                    scaleType: 'band',
                  },
                ]}
                xAxis={[
                  {
                    dataKey: 'likesCount',
                    tickMinStep: 1,
                  },
                ]}
                series={[
                  {
                    dataKey: 'likesCount',
                    label: 'Likes Count',
                    color: '#3D405B',
                  },
                ]}
                layout="horizontal"
                {...chartSetting}
              />
            )}
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

const chartsPageTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '10%',
          'margin-bottom': '15px',
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

export default VacationsCharts;
