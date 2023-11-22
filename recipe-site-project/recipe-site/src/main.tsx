import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import './index.css';
import { SiteHeader } from './components/site-header/SiteHeader.tsx';
import { Footer } from './components/footer/Footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SiteHeader />
    <App />
    <Footer />
  </React.StrictMode>
);
