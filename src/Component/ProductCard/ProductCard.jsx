import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ProductCard = ({product}) => {

    const {name, image, price, short_details, brand_name, rating} = product;
    return ( 
<div className="flex items-center justify-center w-80 mx-auto">
    <div className="w-full p-4">
        <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
            <div className="prod-title">
                <p className="text-2xl font-bold text-gray-900 uppercase">
                    {name}
                </p>
                <p className="text-sm text-gray-400 uppercase">
                    {short_details}
                </p>
            </div>
            <div className="prod-img">
                <img src={image} className="object-cover object-center rounded-lg w-full"/>
            </div>
            <div className="grid gap-10 prod-info">
                {/* rating */}
                <Rating style={{ maxWidth: 250 }} value={rating} readOnly/>
                <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                    <p className="text-xl font-bold">
                        $ {price}
                    </p>
                    <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default ProductCard;