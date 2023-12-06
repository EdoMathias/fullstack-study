import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';
import { Home } from './components/home/Home.tsx';
import { About } from './components/about/About.tsx';
import { Category } from './pages/category/Category.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="category/:categoryId" element={<Category />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
