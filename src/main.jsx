import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './pages/dashboard/Dashboard.jsx';
import Text from './pages/text/Text.jsx';
import Table from './pages/table/Table.jsx';
import { AuthProvider } from './utils/UserContext.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
      {
        path: "/dashboard/text",
        element: <Text/>
      },
      {
        path: "/dashboard/table",
        element: <Table/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
      </React.StrictMode>
  </GoogleOAuthProvider>
)
