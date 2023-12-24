import Box from '@mui/material/Box';
import { useAppSelecetor } from '../../app/hooks';

export const Home = () => {
  const user = useAppSelecetor((state) => state.user.user);

  return (
    <Box>
      <h2>{`Hello ${user?.firstName} ${user?.lastName}`}</h2>
    </Box>
  );
};
