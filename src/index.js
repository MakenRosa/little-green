import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import ESG from './pages/ESG';
import Reports from './pages/Reports';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    { path: '/', element: <Home /> },
    { path: '/esg', element: <ESG /> },
    { path: '/reports', element: <Reports /> },
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
