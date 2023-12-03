// import { Link } from 'react-router-dom'; // If you're using React Router
import { Category } from '../../types/types';

interface SideNavigationProps {
  data: Category[];
}

export const SideNavigation = ({ data }: SideNavigationProps) => {
  return data === null ? (
    <nav>Sidenavigation</nav>
  ) : (
    <nav className="side-navigation">
      <ul>
        {data.map((category) => (
          <li key={category.id}>{category.title}</li>
        ))}
      </ul>
    </nav>
  );
};
