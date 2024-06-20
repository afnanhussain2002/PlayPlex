
import { createBrowserRouter } from "react-router-dom"
import Root from "../root/Root"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import ProductDetails from "../pages/productDetails/ProductDetails"
import Register from "../pages/register/Register"
import Login from "../pages/login/Login"
import PrivateRoute from "../provider/PrivateRoute"
import AddProduct from "../pages/addProduct/AddProduct"
import AllGames from"../pages/allGames/AllGames"

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
                  element:<PrivateRoute><ProductDetails/></PrivateRoute>,
                  loader:({params}) => fetch(`http://localhost:5000/games/${params.id}`)

               },
               {
                  path:'/addProduct',
                  element:<PrivateRoute><AddProduct/></PrivateRoute>
               },
               {
                  path:'/allGames',
                  element:<AllGames/>,
                  loader: () => fetch('http://localhost:5000/games')
               }
            ]
         },
         {path:'/register', element:<Register/>},
         {path:'/login', element:<Login/>}
         
])

export default router