import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelecetor } from '../../app/hooks';

export const Auth = () => {
  const user = useAppSelecetor((store) => store.user.user);

  return <>{user !== null ? <Outlet /> : <Navigate to={'/signin'} />}</>;
};
