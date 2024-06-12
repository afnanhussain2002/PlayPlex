
import { createBrowserRouter } from "react-router-dom"
import Root from "../root/Root"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import ProductDetails from "../pages/productDetails/ProductDetails"

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
         
])

export default router