

import "./home.css";
import BrandName from "../../Component/BrandName/BrandName";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import TopRated from "../../Component/TopRated/TopRated";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const Home = () => {
    const [topRating, setTopRationg] = useState([]);
    const brandData = useLoaderData();


    useEffect(() => {
        const handletoprating = () => {
            fetch('http://localhost:5000/toprated?rating=4.8')
                .then(res => res.json())
                .then(data => setTopRationg(data))
        }
        handletoprating();
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]

    };


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
                <div className="flex justify-center my-4">
                    <div className="mb-4 bg-gradient-to-b from-[#942020] from-40% to-[transparent] rounded-t-lg">
                        <h1 className="font-extrabold text-white text-4xl p-4 header">Our Brands</h1>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-8 body font-bold">
                    {
                        brandData.map(brand => <BrandName key={brand._id} brand={brand}></BrandName>)
                    }
                </div>
                <div className="flex justify-center my-4">
                    <div className="mt-5 bg-gradient-to-b from-[#942020] from-40% to-[transparent] rounded-t-lg">
                        <h1 className="font-extrabold text-white text-4xl p-4 header">Top selling Items</h1>
                    </div>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>

                        {
                            topRating.map(rating => <TopRated key={rating._id} rating={rating}></TopRated>)
                        }

                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Home;