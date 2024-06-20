import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Page/Home/Home";
import AllProdutcs from "../Page/AllProducts/AllProducts";
import MyCart from "../Page/MyCart/MyCart";
import Details from "../Page/Details/Details";
import AddProduct from "../Page/AddProduct/AddProduct";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:() => fetch('http://localhost:5000/brands')
            },
            {
                path: "/allProducts/:brandName",
                element: <AllProdutcs></AllProdutcs>,
                loader: ({ params }) => fetch(`http://localhost:5000/products?name=${params.brandName}`)
            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/addProduct",
                element:<AddProduct></AddProduct>
            }
        ]
    }
])