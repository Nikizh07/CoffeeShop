import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router'
import Home from './components/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import HamMenu from './components/HamMenu.jsx'

const router = createBrowserRouter([
  {
    path: "/CoffeeShop",
    element: <><NavBar/><Home/></>
  },
  {
    path: "/CoffeeShop/products",
    element: <><NavBar/><Products/></>
  },
  {
    path: "/CoffeeShop/cart",
    element:<><NavBar/><Cart/></>
  },
  {
    path: "/CoffeeShop/hmenu",
    element: <HamMenu/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
