
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
import UpdateProduct from "../pages/updateProduct/UpdateProduct"
import Profile from "../pages/profile/Profile"
import MyCart from "../pages/myCart/MyCart"

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
               },
               {
                  path:'/update/:id',
                  element:<UpdateProduct/>,
                  loader:({params}) => fetch(`http://localhost:5000/games/${params.id}`) 
               },
               {
                  path:'/cart/:email',
                  element:<MyCart/>,
                  loader:({params}) => fetch(`http://localhost:5000/cart/${params.email}`)
               },
               {
                  path:'/:email',
                  element:<Profile/>,
                  loader:({params}) => fetch (`http://localhost:5000/games/${params.email}`)
               }
            ]
         },
         {path:'/register', element:<Register/>},
         {path:'/login', element:<Login/>}
         
])

export default router