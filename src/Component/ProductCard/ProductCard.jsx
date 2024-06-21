import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    const { name, image, price, rating, _id } = product;
    

    return (
        <div className="flex items-center justify-center w-80 mx-auto">
            <div className="w-full p-4">
                <div className="flex flex-col justify-center py-4 px-8 bg-white rounded-lg shadow-2xl card">
                    <div className="prod-title h-24">
                        <p className="text-2xl font-bold text-gray-900 uppercase">
                            {name}
                        </p>
                    </div>
                    <div className="prod-img">
                        <img src={image} className="object-cover object-center rounded-lg w-full" />
                    </div>
                    <div className="grid gap-2 prod-info">
                        {/* rating */}
                        <Rating style={{ maxWidth: 250 }} value={rating} readOnly />
                        <div className=" items-center justify-between text-gray-900 md:flex-row">
                            <p className="text-xl font-bold">
                                Price: $ {price}
                            </p>
                            <Link to={`/details/${_id}`}>
                                <button className="px-2 py-1 w-full mb-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-xl hover:bg-slate-300 hover:text-white focus:outline-none">
                                    Details
                                </button>
                            </Link>
                            <Link to={`/updateProduct/${_id}`}>
                                <button className="px-2 py-1 w-full uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-xl hover:bg-slate-300  focus:outline-none">
                                    Updatae
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;