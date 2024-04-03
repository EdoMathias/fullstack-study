import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import UserModel from '../../../Models/UserModel';
import { authService } from '../../../Services/AuthService';
import './Register.css';
import { notify } from '../../../Utils/Notify';
import { Button, Divider, TextField, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function Register(): JSX.Element {
  const { register, handleSubmit } = useForm<UserModel>();

  const navigate = useNavigate();

  async function send(user: UserModel) {
    try {
      await authService.register(user);
      const fullName = user.firstName + ' ' + user.lastName;
      notify.success('Welcome ' + fullName);
      navigate('/list');
    } catch (err: any) {
      notify.error(err);
    }
  }

  function goToLogin() {
    navigate('/login');
  }

  return (
    <ThemeProvider theme={registerFormTheme}>
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit(send)} className="form">
          <h1>Create Account</h1>
          <div className="form-inputs-container">
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              {...register('firstName')}
              autoFocus
            />
            <TextField
              autoComplete="family-name"
              name="lastName"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              {...register('lastName')}
            />
            <TextField
              autoComplete="email"
              name="email"
              required
              fullWidth
              id="email"
              label="Email"
              {...register('email')}
            />
            <TextField
              autoComplete="new-password"
              name="password"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              {...register('password')}
            />
          </div>
          <div className="form-buttons-container">
            <Button type="submit">Sign Up</Button>
            <Divider>Already have an account?</Divider>
            <Button onClick={goToLogin}>Log in</Button>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

const registerFormTheme = createTheme({
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

export default Register;
