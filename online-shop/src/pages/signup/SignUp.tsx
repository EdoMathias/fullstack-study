import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { User } from '../../types/user';
import { signUp } from '../../services/auth-service';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth-slice';

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate, error, data } = useMutation({
    mutationFn: signUp,
  });

  if (error) {
    console.log(error);
  }

  if (data) {
    dispatch(login(data.user));
    navigate('/');
  }

  type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const handleSignUp = (data: FormState) => {
    const user: User = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    mutate(user);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box sx={{ mt: 1 }}>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <TextField
              {...register('firstName', { required: 'First Name is required' })}
              margin="normal"
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <TextField
              {...register('lastName', { required: 'Last Name is required' })}
              margin="normal"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
            <TextField
              {...register('email', { required: 'Email is required' })}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              {...register('password', { required: 'Password is required' })}
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={'/forgotPassword'}>Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to={'/signin'}>{'Already have an account? Sign In'}</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
};
