import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAppSelecetor } from '../../app/hooks';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth-slice';
import { signOut } from '../../services/auth-service';
import { grey } from '@mui/material/colors';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    signOut();
    navigate('/');
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const cartProductsAmount = useAppSelecetor((state) => {
    let totalProducts = 0;
    Object.keys(state.card.products).forEach(
      (key) => (totalProducts += state.card.products[key].amount)
    );
    return totalProducts;
  });
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6" noWrap component="div">
              Edo's Online Store
            </Typography>
          </Grid>
          <Grid item>
            <Link to={'/cart'} style={{ margin: '0 10px' }}>
              <IconButton>
                <Badge badgeContent={cartProductsAmount}>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to={'/'} style={{ margin: '0 10px' }}>
              <Button variant="contained" color="success">
                Home
              </Button>
            </Link>
            <Link to={'/product/create'} style={{ margin: '0 10px' }}>
              <Button variant="contained" color="success">
                Create Product
              </Button>
            </Link>
            <Link to={'/signin'} style={{ margin: '0 10px' }}>
              <Button variant="contained" color="success">
                Login
              </Button>
            </Link>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={'account'} onClick={handleCloseUserMenu}>
                <Link to={'/account'} style={{ textDecoration: 'none' }}>
                  <Typography textAlign="center">Account</Typography>
                </Link>
              </MenuItem>
              <MenuItem key={'logout'} onClick={handleLogOut}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
