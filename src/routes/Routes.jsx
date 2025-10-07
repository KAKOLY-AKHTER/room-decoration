import { createBrowserRouter } from "react-router"
import MainLayout from "../layout/MainLayout"
import Error from "../pages/Error"
import ProductDetails from "../Pages/ProductDetails"
import Products from "../Pages/Products"

import Home from "../Pages/Home"
import Wishlist from "../pages/Wishlist"

const router = createBrowserRouter([
  {
    path: '/',
    element: < MainLayout/>,
    errorElement: <Error />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
    ],
  },
 
])

export default router;
