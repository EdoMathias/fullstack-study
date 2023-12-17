import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout.tsx';
import { Home } from '../pages/home/Home.tsx';
import { About } from '../pages/about/About.tsx';
import { Category } from '../pages/category/Category.tsx';
import { ProductPage } from '../pages/product/ProductPage.tsx';
import { Cart } from '../pages/cart/Cart.tsx';
import { CreateProduct } from '../pages/create-product/CreateProduct.tsx';

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
      {
        path: 'product/:productId',
        element: <ProductPage />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'product/create',
        element: <CreateProduct />,
      },
    ],
  },
]);
