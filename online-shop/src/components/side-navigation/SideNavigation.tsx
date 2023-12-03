// import { Link } from 'react-router-dom'; // If you're using React Router
import { useEffect, useState } from 'react';
import { Category } from '../../types/types';
import { getCategories } from '../../services/products-service';

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
    <nav className="side-navigation">
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>{category.title}</li>
        ))}
      </ul>
    </nav>
  );
};
