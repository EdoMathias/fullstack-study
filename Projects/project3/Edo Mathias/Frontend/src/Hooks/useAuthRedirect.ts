import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { appStore } from '../Redux/Store';

function useAuthRedirect() {
  const user = appStore.getState().user;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return user;
}

export default useAuthRedirect;