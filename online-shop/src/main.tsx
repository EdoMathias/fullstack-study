import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './routes';
import { RouterProvider } from 'react-router';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);
