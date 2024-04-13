import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CredentialsModel from '../../../Models/CredentialsModel';
import { appStore } from '../../../Redux/Store';
import { authService } from '../../../Services/AuthService';
import { notify } from '../../../Utils/Notify';
import { ThemeProvider } from '@emotion/react';
import { Button, Divider, TextField, createTheme } from '@mui/material';
import styles from './Login.module.css';
import About from '../About/About';

function Login(): JSX.Element {
  const { register, handleSubmit } = useForm<CredentialsModel>();

  const navigate = useNavigate();

  async function send(credentials: CredentialsModel) {
    try {
      await authService.login(credentials);
      const firstName = appStore.getState().user.firstName;
      notify.success(`Welcome back ${firstName}!`);
      navigate('/list');
    } catch (err: any) {
      notify.error(err);
    }
  }

  function goToRegister() {
    navigate('/register');
  }

  return (
    <ThemeProvider theme={loginFormTheme}>
      <div className={styles.formContainer}>
        <About />
        <form onSubmit={handleSubmit(send)} className={styles.loginForm}>
          <h1>Log in</h1>
          <div className="form-inputs-container">
            <TextField
              autoComplete="email"
              name="email"
              required
              fullWidth
              id="email"
              label="Email"
              {...register('email')}
              autoFocus
            />
            <TextField
              autoComplete="current-password"
              name="password"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              {...register('password')}
            />
          </div>
          <div className={styles.formInputsContainer}>
            <Button type="submit">Log in</Button>
            <Divider>Don't have an account?</Divider>
            <Button onClick={goToRegister}>Sign up</Button>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

const loginFormTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '10px',
          width: '70%',
          fontFamily: 'Mantinia Regular',
          backgroundColor: '#eee',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
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

export default Login;
