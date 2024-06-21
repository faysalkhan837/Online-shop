import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const navigate = useNavigate();
    const productData = useLoaderData();
    const {name, image, product_id, brand_name, price, rating, _id} = productData;
    console.log(productData)
    const handleUpdateProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const product_id = form.productid.value;
        const brand_name = form.brandname.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const productDetails = { name, product_id, brand_name, image, price, rating }
        console.log(productDetails);

        fetch(`http://localhost:5000/products/${_id}`,{
            method:"PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(productDetails)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                Swal.fire({
                    title: "Product updated Sucessfully",
                    icon: "success"
                  });
            }
        })
        navigate("/")
    }
    return (
        <form onSubmit={handleUpdateProduct}>
            <div className="h-28"></div>
            <div>
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold mb-5">Update Product</h1>
                </div>
                {/* 1st row */}
                <div className="md:flex justify-center gap-5 max-sm:px-2">
                    <div className="flex flex-col md:w-4/12">
                        <label htmlFor="">Name</label>
                        <input defaultValue={name} className="max-w-md w-full p-2 border-2 border-slate-300 rounded-lg" placeholder="Name" name="name" type="text" />
                    </div>
                    <div className="flex flex-col md:w-4/12">
                        <label htmlFor="">Product Id</label>
                        <input defaultValue={product_id} className="max-w-md w-full p-2 border-2 border-slate-300 rounded-lg" placeholder="Product Id" name="productid" type="text" />
                    </div>
                </div>
                {/* 2st row */}
                <div className="md:flex justify-center gap-5 max-sm:px-2">
                    <div className="flex flex-col md:w-4/12">
                        <label htmlFor="">Brand Name</label>
                        <input defaultValue={brand_name} className="max-w-md w-full p-2 border-2 border-slate-300 rounded-lg" placeholder="Brand Name" name="brandname" type="text" />
                    </div>
                    <div className="flex flex-col md:w-4/12">
                        <label htmlFor="">Photo Url</label>
                        <input defaultValue={image} className="max-w-md w-full p-2 border-2 border-slate-300 rounded-lg" placeholder="Photo Url" name="image" type="text" />
                    </div>
                </div>
                {/* 3st row */}
                <div className="md:flex justify-center gap-5 max-sm:px-2">
                    <div className="flex flex-col md:w-4/12">
                        <label htmlFor="">Price</label>
                        <input defaultValue={price} className="max-w-md w-full p-2 border-2 border-slate-300 rounded-lg" placeholder="Price" name="price" type="text" />
                    </div>
                    <div className="flex flex-col md:w-4/12">
                        <label htmlFor="">Rating</label>
                        <input defaultValue={rating} className="max-w-md w-full p-2 border-2 border-slate-300 rounded-lg" placeholder="Rating" name="rating" type="text" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2">
                <input className="btn btn-primary lg:max-w-3xl md:max-w-lg w-full text-lg font-bold my-7 text-white" type="submit" value='Submit' />
            </div>
        </form>
    );
};

export default UpdateProduct;