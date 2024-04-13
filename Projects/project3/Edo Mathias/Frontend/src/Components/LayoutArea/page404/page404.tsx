import { Button, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './Page404.module.css';

function Page404(): JSX.Element {
  const navigate = useNavigate();

  function navigateToVacationsList() {
    navigate('/list');
  }
  return (
    <ThemeProvider theme={page404Theme}>
      <div className={styles.page404}>
        <p>The page you are looking for doesn't exist.</p>
        <Button size="large" onClick={navigateToVacationsList}>
          Home
        </Button>
        <iframe
          width="788"
          height="443"
          src="https://www.youtube.com/embed/-ZGlaAxB7nI"
          title="YOU DIED (HD)"
          allow="accelerometer; autoplay;"
        ></iframe>
      </div>
    </ThemeProvider>
  );
}

export default Page404;

const page404Theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '10%',
          marginBottom: '15px',
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
