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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqkn53vMq9C9McqiO5mRjjqQeMKmRPOPQ",
  authDomain: "greentotem-6527a.firebaseapp.com",
  projectId: "greentotem-6527a",
  storageBucket: "greentotem-6527a.appspot.com",
  messagingSenderId: "439792335250",
  appId: "1:439792335250:web:887295d6eb1235a1e4694b",
  measurementId: "G-52VJWNYW1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
