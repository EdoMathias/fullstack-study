import { useEffect, useState } from 'react';
import { SideNavigation } from '../side-navigation/SideNavigation';
import style from './layout.module.css';
import axios from 'axios';
import { Category } from '../../types/types';

export const Layout = () => {
  return (
    <div className={style.layout}>
      <div className={style.header}>Header</div>
      <div className={style.sidebar}>
        <SideNavigation />
      </div>
      <div className={style.main}>Main</div>
      <div className={style.footer}>Footer</div>
    </div>
  );
};
