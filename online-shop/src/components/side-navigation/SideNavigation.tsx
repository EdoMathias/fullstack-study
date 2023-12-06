// import { Link } from 'react-router-dom'; // If you're using React Router
import { useEffect, useState } from 'react';
import { Category } from '../../types/types';
import { getCategories } from '../../services/categories-service';
import style from './sidebar.module.css';
import { Link } from 'react-router-dom';

export const SideNavigation = () => {
  const [categories, setcategories] = useState<Category[] | null>(null);

  useEffect(() => {
    const callGetAllCategories = async () => {
      const categories = await getCategories();
      setcategories(categories!);
    };
    callGetAllCategories();
  }, []);

  return categories === null ? (
    <div>LOADING...</div>
  ) : (
    <nav className={style.sidebar}>
      <ul className={style.menu}>
        {categories?.map((category) => (
          <li key={category.id}>
            <Link to={`category/${category.id}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
