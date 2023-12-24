import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Container,
  CssBaseline,
  TextField,
  Button,
} from '@mui/material';
import { useAppSelecetor } from '../../app/hooks';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editUser } from '../../features/auth-slice';
import { signIn } from '../../services/auth-service';
import { SignedUser, User } from '../../types/user';

export const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate, error, data } = useMutation({
    mutationFn: editUser,
  });

  type FormState = {
    firstName: string;
    lastName: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const handleEditUser = (data: FormState) => {
    const user: User = {
      firstName: data.firstName,
      lastName: data.lastName,
    };
    mutate(user);
    setEditable(false);
  };

  const user = useAppSelecetor((state) => state.user.user);
  const [isEditable, setEditable] = useState(false);

  const handleEditClick = () => {
    setEditable(true);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CssBaseline />
      <Card
        style={{
          maxWidth: '400px',
          margin: 'auto',
        }}
      >
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Profile Information
          </Typography>
          <form
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              variant="outlined"
              value={user?.firstName}
              disabled={!isEditable}
            />
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              variant="outlined"
              value={user?.lastName}
              disabled={!isEditable}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={user?.email}
              disabled={true}
            />
            {isEditable ? (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
                onClick={handleSaveClick}
              >
                Save Changes
              </Button>
            ) : (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
                onClick={handleEditClick}
              >
                Edit
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};
