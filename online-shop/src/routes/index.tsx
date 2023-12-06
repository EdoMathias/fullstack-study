import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout.tsx';
import { Home } from '../pages/home/Home.tsx';
import { About } from '../pages/about/About.tsx';
import { Category } from '../pages/category/Category.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        // path: 'home',
        element: <Home />,
        index: true,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'category/:categoryId',
        element: <Category />,
      },
    ],
  },
]);
