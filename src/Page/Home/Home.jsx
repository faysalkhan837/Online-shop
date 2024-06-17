// import { useLoaderData } from "react-router-dom";

import "./home.css";
import BrandName from "../../Component/BrandName/BrandName";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Home = () => {
    const [brandData, setBrandData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrandData(data))
    }, [])
    console.log(brandData.length)

    return (
        <div>
            <div className="">
                <div className="gradient-overlay">                  
                    <img className=" w-full" src="/main-bn.png" alt="" />
                </div>
                <div className="">
                    <Marquee pauseOnHover autoFill speed={200}>
                        <img className="md:h-[100px] h-[50px]" src="/Adidas.png" alt="" />
                        <img className="md:h-[100px] h-[50px]" src="/Hnm.png" alt="" />
                        <img className="md:h-[100px] h-[50px]" src="/Guchi.png" alt="" />
                        <img className="md:h-[100px] h-[50px]" src="/nike.png" alt="" />
                        <img className="md:h-[100px] h-[50px]" src="/Levis.png" alt="" />
                        <img className="md:h-[100px] h-[50px]" src="/zaralogo.png" alt="" />
                    </Marquee>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-8">
                    {
                        brandData.map(brand => <BrandName key={brand._id} brand={brand}></BrandName>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;