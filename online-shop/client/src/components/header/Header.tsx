import { Badge, Button, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppSelecetor } from '../../app/hooks';

export const Header = () => {
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
            <Link to={'/about'} style={{ margin: '0 10px' }}>
              <Button variant="contained" color="success">
                About
              </Button>
            </Link>
            <Link to={'/product/create'} style={{ margin: '0 10px' }}>
              <Button variant="contained" color="success">
                Create Product
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
