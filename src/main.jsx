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
      element: <AddProducts></AddProducts>
    },
    {
      path:'/myCart',
      element: <MyCart></MyCart>
    }
    
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
