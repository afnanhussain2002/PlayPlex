
import { createBrowserRouter } from "react-router-dom"
import Root from "../root/Root"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import ProductDetails from "../pages/productDetails/ProductDetails"
import Register from "../pages/register/Register"
import Login from "../pages/login/Login"

const router = createBrowserRouter([
         {
            path:'/',
            element:<Root/>,
            children:[
               {
                  path:'/',
                  element:<Home/>
               },
               {
                  path:'/about',
                  element:<About/>
               },
               {
                  path:'/product/:id',
                  loader:() => fetch('./data/product.json'),
                  element:<ProductDetails/>

               }
            ]
         },
         {path:'/register', element:<Register/>},
         {path:'/login', element:<Login/>}
         
])

export default router