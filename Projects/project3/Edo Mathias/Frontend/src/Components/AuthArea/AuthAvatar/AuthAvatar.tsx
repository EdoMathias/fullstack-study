import { Logout } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../Services/AuthService';
import { notify } from '../../../Utils/Notify';
import UserModel from '../../../Models/UserModel';

type AuthAvatarProps = {
  user: UserModel;
};

function AuthAvatar(props: AuthAvatarProps): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const userLetters = props.user
    ? props.user.firstName.charAt(0).toUpperCase() +
      props.user.lastName.charAt(0).toUpperCase()
    : '';

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function logMeOut(): void {
    authService.logout();
    navigate('/login');
    notify.success(`Logging out...`);
  }
  return (
    <React.Fragment>
      <Box>
        <Typography
          sx={{
            display: { xs: 'none', sm: 'none', md: 'inline' },
          }}
        >
          {props.user.firstName} {props.user.lastName}
        </Typography>
        <IconButton
          onClick={handleClick}
          size="large"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{
              width: 60,
              height: 60,
              fontSize: 'xx-large',
              fontFamily: 'Spectral Regular',
              backgroundColor: '#F3B664',
            }}
          >
            {userLetters}
          </Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          sx={{ fontFamily: 'Mantinia Regular' }}
          onClick={() => {
            handleClose();
            logMeOut();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          LOGOUT
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
export default AuthAvatar;
