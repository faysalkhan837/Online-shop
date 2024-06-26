import { Link } from "react-router-dom";
import NavLinks from "../Component/NavLinks/NavLinks";
import { useContext, useState } from "react";
import { AuthContext } from "../Component/Provider/AuthProvider";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => (console.log(error)))
    }
    const navList = [
        { id: 1, name: "Home", patch: "/" },
        { id: 2, name: "Sign Up", patch: "/signUp" },
        { id: 3, name: "Contuct", patch: "/contuctUs" },
        { id: 4, name: "Add product", patch: "/addProduct" },
        { id: 5, name: "My Cart", patch: "/myCart" }
    ]
    return (
        <div className="relative text-yellow-300" style={{ fontFamily: "Poppins" }}>
            <nav className=" absolute z-10 lg:flex justify-between items-center w-full bg-gradient-to-b from-[#942020] from-30% to-[transparent]">
            <div className="flex justify-between items-center w-full">
                <Link to='/'>
                    <div className="flex justify-center items-center">
                        <img className="md:max-w-[100px] max-w-[60px]" src="/logo2.png" alt="" />
                        <h1 className="text-2xl font-bold text-white ">Nail</h1>
                    </div>
                </Link>
                {/* Drop down menu */}
                <div>    
                    <div className=" max-sm:text-sm">
                    <div onClick={()=>setOpen(!open)} className="md:hidden pr-2">
                        {
                            open === true? <TiThMenu className="text-xl"></TiThMenu> :
                            <IoCloseSharp className="text-2xl"></IoCloseSharp>
                            
                        }
                    </div>
                        <ul className={`md:flex font-bold max-sm:bg-[#942020] gap-4 rounded-b-md absolute md:static p-2 duration-1000 max-sm:right-0 ${open? "-top-60" : "top-8"}`}>
                            {
                                navList.map(list => <NavLinks key={list.id} list={list}></NavLinks>)
                            }
                        </ul>
                    </div>
                </div>
            </div>

                {/* user and logIn logOut */}
                <div className="text-slate-700 w-full flex justify-start font-bold gap-4 max-sm:text-sm md:justify-end md:pr-4 px-2 lg:w-1/2">
                    <div>
                        <h1 className="">{user?.displayName}</h1>
                    </div>
                    <div className="">
                        {
                            user ? <button onClick={handleLogOut}>LogOut</button>
                                : <Link to='/login'><button>Login</button></Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;