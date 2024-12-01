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
    path: "/",
    element: <><NavBar/><Home/></>
  },
  {
    path: "/products",
    element: <><NavBar/><Products/></>
  },
  {
    path: "/cart",
    element:<><NavBar/><Cart/></>
  },
  {
    path: "/hmenu",
    element: <HamMenu/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
