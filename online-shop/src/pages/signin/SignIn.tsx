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
import { useMutation } from '@tanstack/react-query';
import { signIn } from '../../services/auth-service';
import { SignedUser } from '../../types/user';
import { router } from '../../routes';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth-slice';
import { useForm } from 'react-hook-form';

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate, error, data } = useMutation({
    mutationFn: signIn,
  });

  if (error) {
    console.log(error);
  }

  if (data) {
    dispatch(login(data.user));
    navigate('/');
  }

  type FormState = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSignIn = (data: FormState) => {
    const user: SignedUser = {
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
          Sign In
        </Typography>
        <Box sx={{ mt: 1 }}>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <TextField
              {...register('email', { required: 'Email is required' })}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={'/'}>return home</Link>
              </Grid>
              <Grid item>
                <Link to={'/signup'}>{"Don't have an account? Sign In"}</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
};
