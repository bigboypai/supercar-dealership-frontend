import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Wrap from './components/wrap'
import ErrorPage from './components/errorPage';
import X from './components/X';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrap />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cars/:carId",
    element: <X />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
