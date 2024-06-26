
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const product = useLoaderData();
    const {image, name, price, product_id, short_details} = product;
    const cartData = { name, image, price }

    const handleAddToCart = (cartData) => {
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "THANKS",
                        text: "Your Product is added to the cart Sucessfully",
                        icon: "success"
                    });
                }
                console.log(data)
            })
    }
  
    return (
        <div>
            <div>
                <img src="/details.png" alt="" />
            </div>
            <div>
            <section>
  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div className="flex flex-wrap items-center mx-auto max-w-7xl">
      <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

            <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <img className="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src={image}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
        <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">{product_id} </span>
        <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">{name}.</h1>
        <p className="mb-2 text-base leading-relaxed text-left text-gray-500">{short_details}.</p>
        <p className="mb-2 text-lg font-bold leading-relaxed text-left text-gray-500">$ {price}.</p>
        <div className="mt-0 lg:mt-2 max-w-7xl sm:flex">
          <div className="mt-2 rounded-lg sm:mt-0">
            <button onClick={()=>handleAddToCart(cartData)} className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
        </div>
    );
};

export default Details;