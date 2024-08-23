import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Forgotpassword from "../pages/Forgotpassword";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";
import CategoryProduct from "../pages/CategoryProduct";
import ProductDetails from "../pages/ProductDetails";
import SearchProduct from "../pages/SearchProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Login",
        element: <Login/>,
      },
      {
        path:"Forgot-Password",
        element:<Forgotpassword />,
      }
      ,
      {
        path:"Signup",
        element:<Signup />,
      },
      {
        path:"product-category",
        element:<CategoryProduct/>

      },
      {
        path:"product/:id",
        element:<ProductDetails/>

      }
,      
{
  path:'cart',
  element:<Cart />,
},
{
  path:"search",
  element:<SearchProduct/>
},{
        path:"Admin-Panel",
        element:<AdminPanel />,
        children:[
          {
            path:"all-users",
            element:<AllUsers />,
          },
          {
            path:"all-products",
            element:<AllProducts />,
          }
        ]
        // condition: (route) => isLoggedIn() // Replace with your own logic to check if user is logged in
      }
    ],
  },
]);
export default router;
