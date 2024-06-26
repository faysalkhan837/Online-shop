import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Page/Home/Home";
import AllProdutcs from "../Page/AllProducts/AllProducts";
import MyCart from "../Page/MyCart/MyCart";
import Details from "../Page/Details/Details";
import AddProduct from "../Page/AddProduct/AddProduct";
import UpdateProduct from "../Page/UpdataeProduct/UpdateProduct";
import SignUp from "../Page/SignUp/SignUp";
import Login from "../Page/Login/Login";
import PrivateRout from "../PrivateRout/privateRout";
import ContuctUs from "../Page/ContuctUs/ContuctUs";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path: "/allProducts/:brandName",
                element: <PrivateRout><AllProdutcs></AllProdutcs></PrivateRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/products?name=${params.brandName}`)
            },
            {
                path: "/myCart",
                element: <PrivateRout><MyCart></MyCart></PrivateRout>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/addProduct",
                element: <PrivateRout><AddProduct></AddProduct></PrivateRout>
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/contuctUs",
                element: <ContuctUs></ContuctUs>
            }
        ]
    }
])