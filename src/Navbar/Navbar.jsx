import { Link } from "react-router-dom";
import NavLinks from "../Component/NavLinks/NavLinks";


const Navbar = () => {
    const navList = [
        { id: 1, name: "Home", patch: "/" },
        { id: 1, name: "Sign Up", patch: "/signUp" },
        { id: 1, name: "About", patch: "/about" }
    ]
    return (
        <div className="bg-transparent absolute flex items-center w-full">
            <Link to='/'>
                <div className="flex justify-center items-center w-52">
                    <img className="max-w-full" src="/logo2.png" alt="" />
                    <h1 className="text-2xl font-bold text-white">Nail</h1>
                </div>
            </Link>
            <div className="flex justify-end text-white font-bold gap-4 w-[580px]">
                {
                    navList.map(list => <NavLinks key={list.id} list={list}></NavLinks>)
                }
            </div>
        </div>
    );
};

export default Navbar;