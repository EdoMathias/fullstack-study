import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserModel from '../../../Models/UserModel';
import { AppState } from '../../../Redux/AppState';
import './AuthMenu.css';
import LoginIcon from '@mui/icons-material/Login';
import AuthAvatar from '../AuthAvatar/AuthAvatar';

function AuthMenu(): JSX.Element {
  const user = useSelector<AppState, UserModel>((appState) => appState.user);

  if (user) {
    return <AuthAvatar user={user} />;
  }
}

export default AuthMenu;
