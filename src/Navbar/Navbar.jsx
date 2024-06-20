import { Link } from "react-router-dom";
import NavLinks from "../Component/NavLinks/NavLinks";


const Navbar = () => {
    const navList = [
        { id: 1, name: "Home", patch: "/" },
        { id: 2, name: "Sign Up", patch: "/signUp" },
        { id: 3, name: "About", patch: "/about" },
        { id: 4, name: "Add product", patch: "/addProduct" },
        { id: 5, name: "My Cart", patch: "/myCart" }
    ]
    return (
        <div className="relative">
            <nav className=" absolute z-10 flex flex-wrap justify-between items-center w-full bg-gradient-to-b from-[#942020] from-30% to-[transparent]">
                <Link to='/'>
                    <div className="flex justify-center items-center">
                        <img className="md:max-w-[100px] max-w-[60px]" src="/logo2.png" alt="" />
                        <h1 className="text-2xl font-bold text-white">Nail</h1>
                    </div>
                </Link>
                <div className="flex justify-end text-white font-bold gap-4 mr-10">
                    {
                        navList.map(list => <NavLinks key={list.id} list={list}></NavLinks>)
                    }
                </div>
                <div className="flex justify-center text-white font-bold  mr-4">
                    <button>Login</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;