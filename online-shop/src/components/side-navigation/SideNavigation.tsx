import { getCategories } from '../../services/categories-service';
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
import { useFetch } from '../../hooks/useFetch';
import { Category } from '../../types/types';
import { useQuery } from '@tanstack/react-query';

const drawerWidth = 240;

export const SideNavigation = () => {
  // const {result:categories, isLoading} = useFetch<Category[]>(getCategories);
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['categories'], queryFn: getCategories });

  if (isLoading) {
    return;
  }
  if (isError) {
    return;
  }

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
          {categories === undefined ? (
            <Box key={'loading'}>Loading...</Box>
          ) : (
            categories.map((category) => (
              <Link key={category.id} to={`category/${category.id}`}>
                <ListItem disablePadding>
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
