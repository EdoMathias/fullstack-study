import { useEffect, useState } from 'react';
import { SideNavigation } from '../side-navigation/SideNavigation';
import style from './layout.module.css';
import axios from 'axios';
import { Category } from '../../types/types';

export const Layout = () => {
  const [categories, setcategories] = useState<Category[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const result = await axios.get<Category[]>(
        'http://localhost:3000/categories'
      );
      setcategories(
        result.data?.map((category: Category) => ({
          id: category.id,
          title: category.title,
        }))
      );
    };
    getCategories();
  }, []);

  return (
    <div className={style.layout}>
      <div className={style.header}>Header</div>
      <div className={style.sidebar}>
        <SideNavigation data={categories} />
      </div>
      <div className={style.main}>Main</div>
      <div className={style.footer}>Footer</div>
    </div>
  );
};
