// import { Link } from 'react-router-dom'; // If you're using React Router
import { useEffect, useState } from 'react';
import { Category } from '../../types/types';
import { getCategories } from '../../services/categories-service';
import style from './sidebar.module.css';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

const drawerWidth = 240;

export const SideNavigation = () => {
  const [categories, setcategories] = useState<Category[] | null>(null);

  useEffect(() => {
    const callGetAllCategories = async () => {
      const categories = await getCategories();
      setcategories(categories!);
    };
    callGetAllCategories();
  }, []);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {categories === null ? (
            <Box>Loading...</Box>
          ) : (
            categories.map((category) => (
              <Link to={`category/${category.id}`}>
                <ListItem key={category.id} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={category.title} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))
          )}
        </List>
      </Box>
    </Drawer>
  );
};
