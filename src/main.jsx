import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home/Home'
import Products from './routes/Products/Products'
import Product from './routes/Product/Product'
import './main.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/:id",
    element: <Product />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
