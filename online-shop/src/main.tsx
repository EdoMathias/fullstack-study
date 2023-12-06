import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './routes';
import { RouterProvider } from 'react-router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
