import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './layout/Header/Navbar';
import About from './pages/About/About'
import Main from './layout/Main/Main';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from './layout/Footer/Footer';
import AppartementPage from './pages/Appartementpage/AppartementPage';
import ErrorPage from './pages/ErrorPage/ErrorPage'

const HeaderFooterLayout =() =>{
  return (
    <>
      <Navbar />
      <Main><Outlet /></Main>
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/flat",
        element: <AppartementPage />
      },
      {
        path: "/about",
        element:<About />
      }
    ]

  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

