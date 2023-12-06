import { Outlet } from 'react-router-dom';
import { SideNavigation } from '../side-navigation/SideNavigation';
import style from './layout.module.css';
import { Header } from '../header/Header';

export const Layout = () => {
  return (
    <div className={style.layout}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.sidebar}>
        <SideNavigation />
      </div>
      <div className={style.main}>{<Outlet />}</div>
      <div className={style.footer}>Footer</div>
    </div>
  );
};
