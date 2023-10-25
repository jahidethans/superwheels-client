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
import MyCart from './components/MyCart';
import AuthProvider from './Provider/AuthProvider';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddProduct from './Pages/AddProduct';
import Cars from './Pages/Cars';
import UpdateCar from './Pages/UpdateCar';
import CarDetail from './Pages/CarDetail';

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
      element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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
      path: '/register',
      element: <Register></Register>
    },
    {
      path:'/cars/:id',
      element:<Cars></Cars>,
      loader: ()=>fetch('/data.json')
    },
    {
      path:'/updatecar/:id',
      element: <PrivateRoute><UpdateCar></UpdateCar></PrivateRoute>,
      loader: ({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
    },
    {
      path: '/cardetail',
      element: <CarDetail></CarDetail>
    }
    
  
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
