import { useLoaderData } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";


const AllProdutcs = () => {
    const data = useLoaderData();
    console.log(data.length)
    return (
        <div>
            <Navbar></Navbar>
        </div>
    );
};

export default AllProdutcs;