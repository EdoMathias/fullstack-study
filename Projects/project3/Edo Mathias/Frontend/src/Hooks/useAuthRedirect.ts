import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { appStore } from '../Redux/Store';
import { notify } from '../Utils/Notify';

function useAuthRedirect() {
  const user = appStore.getState().user;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      notify.error('You must be logged in to view this page');
    }
    if (user?.roleId === 2) {
      navigate('/list');
      notify.error('You are not authorized to view this page');
    }
  }, [user, navigate]);

  return user;
}

export default useAuthRedirect;
