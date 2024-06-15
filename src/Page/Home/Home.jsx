import Navbar from "../../Navbar/Navbar";
import "./home.css";

const Home = () => {
    return (
        <div>
            <div className="relative">
                <div className="gradient-overlay">
                    <Navbar></Navbar>
                    <img className=" w-full" src="/main-bn.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;