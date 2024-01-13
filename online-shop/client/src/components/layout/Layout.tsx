import { Outlet } from 'react-router-dom';
import { SideNavigation } from '../side-navigation/SideNavigation';
import style from './layout.module.css';
import { Header } from '../header/Header';

//

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

export const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <SideNavigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {<Outlet />}
      </Box>
    </Box>
  );
};
