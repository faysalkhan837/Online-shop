import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Page/Home/Home";
import AllProdutcs from "../Page/AllProducts/AllProducts";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                // loader:() => fetch('http://localhost:5000/brands')
            },
           {
            path:"/allProducts/:brandName",
            element:<AllProdutcs></AllProdutcs>,
            loader:({params}) => fetch(`http://localhost:5000/products/${params.brandName}`)
           }
        ]
    }
])