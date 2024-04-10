import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './pages/dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="">
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </GoogleOAuthProvider>
)
