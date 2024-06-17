import { useLoaderData } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "../../Component/ProductCard/ProductCard";

const AllProdutcs = () => {
    const loadedProduct = useLoaderData();
    // console.log(data.length)
    return (
        <div>         
            <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showStatus={false}>
                <div><img src="/zaraBN.png" /></div>      
                <div><img src="/adidasBN.png" /></div>        
                <div><img src="/guchiBN.png" /></div>        
                <div><img src="/hnmBN.png" /></div>        
                <div><img src="/nikeBN.png" /></div>        
            </Carousel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    loadedProduct.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProdutcs;