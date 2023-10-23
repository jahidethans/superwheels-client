import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root.jsx';

import Home from './Pages/Home.jsx';
import ErrorPage from './Pages/ErrorPage';
import AddProducts from './Pages/AddProducts';
import MyCart from './components/MyCart';
import AuthProvider from './Provider/AuthProvider';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element: <Home></Home>
    },
    {
      path:'/addProduct',
      element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
    },
    {
      path:'/myCart',
      element: <MyCart></MyCart>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/addproduct',
      element: <AddProducts></AddProducts>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
