import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Main from './layout/Main';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from './layout/Footer';
import AppartementPage from './pages/AppartementPage';

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
    errorElement: <h1>404 not found</h1>,
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
        element:<h1>A propos</h1>
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

