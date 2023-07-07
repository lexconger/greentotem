import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import Contact from './routes/Contact';

import {
  createBrowserRouter,
  RouterProvider,
  hashHistory,
  createHashRouter
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact",
    element: <Contact />
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* Imports for Google's Montserrat font used in title*/}
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"></link>
    {/* Body document font - Roboto */}
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </>
);
