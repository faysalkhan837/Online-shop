import { Link } from "react-router-dom";


const BrandName = ({ brand }) => {
    return (
        <div className="max-w-[300px] mx-auto shadow-black shadow-xl rounded-lg bg-gradient-to-b from-[#F8C82A] from-10% to-[#ece5b4] to-90%">
            <img className="" src={brand.photoUrl} />
            <div className="p-3 mb-5">
                <Link to={`/allProducts/${brand.brandName}`}>
                    <button className="py-2 shadow-lg shadow-black rounded-2xl w-full bg-[#e7ab0b]">Products</button>
                </Link>
            </div>
        </div>)
};

export default BrandName;