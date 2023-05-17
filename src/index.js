import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/flat",
    element: <h1>Nos appartements</h1>
  },
  {
    path: "/about",
    element: <h1>A propos</h1>
  },
  {
    path: "/404",
    element: <h1>404</h1>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

