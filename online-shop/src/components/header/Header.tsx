import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const Header = () => {
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
            <Link to={'/'} style={{ margin: '0 10px' }}>
              Home
            </Link>
            <Link to={'/about'} style={{ margin: '0 10px' }}>
              About
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
