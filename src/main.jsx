import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './output.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './pages/dashboard/Dashboard.jsx';
import Text from './pages/text/Text.jsx';
import Table from './pages/table/Table.jsx';
import Privacy from './pages/privacy/Privacy.jsx';
import { AuthProvider } from './utils/UserContext.jsx';
import ProtectedRoute from './utils/ProtectRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><Dashboard/></ProtectedRoute>,
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
  },
  {
    path: "/privacy",
    element: <Privacy/>
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
