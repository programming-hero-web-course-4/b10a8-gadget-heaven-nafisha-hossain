import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
}
from 'react-router-dom';
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErroPage';
import Home from './Components/Home/Home';
import AllProductCards from './Components/AllProductCards/AllProductCards';
import Dashboard from './Components/Dashboard/Dashboard';
import CategoryCard from './Components/CategoryCard/CategoryCard';
import RepairSupport from './Components/RepairSupport/RepairSupport';
import StatisticPage from './Components/StatisticPage/StatisticPage';
import ViewDetails from './Components/ViewDetails/ViewDetails';
import ListedCard from './Components/ListedCart/ListedCart';
import ListedCart from './Components/ListedCart/ListedCart';
import Wishlis from './Components/Wishlist/Wishlist';
import Wishlist from './Components/Wishlist/Wishlist';



const router = createBrowserRouter
([

  {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:
    [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/category.json'),
        children:
        [

          {
            path: "/",
            element: <AllProductCards></AllProductCards>,
            loader: ()=> fetch('/products.json')
          },
          {
            path: "/category/:category",
            element: <CategoryCard></CategoryCard>,
            loader: ()=> fetch('/products.json')
          },

        ]
      },
      {
        path: "products/:product_id",
        element: <ViewDetails></ViewDetails>,
        loader: ()=> fetch('/products.json')
      },

      {
        path:'/statistics',
        element: <StatisticPage></StatisticPage>,
      },

      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: 'cart',  // Corrected path here
            element: <ListedCart />,
            loader: () => fetch('/products.json')
          },
          {
            path: 'wishlist',  // Corrected path here
            element: <Wishlist />,
            loader: () => fetch('/products.json')
          }

        ]
      },

      {
        path:'/support',
        element: <RepairSupport></RepairSupport>,
      }


    ]
    
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
