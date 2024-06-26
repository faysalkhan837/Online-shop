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
            <nav className=" absolute z-10 flex flex-wrap justify-between items-center w-full bg-gradient-to-b from-[#942020] from-30% to-[transparent]">
                <Link to='/'>
                    <div className="flex justify-center items-center">
                        <img className="md:max-w-[100px] max-w-[60px]" src="/logo2.png" alt="" />
                        <h1 className="text-2xl font-bold text-white ">Nail</h1>
                    </div>
                </Link>
                {/* Drop down menu */}
                <div>
                    
                    <div className="w-[430px] flex justify-center items-center">
                    <div onClick={()=>setOpen(!open)} className="md:hidden absolute">
                        {
                            open === true? <IoCloseSharp className="w-3"></IoCloseSharp> :
                            <TiThMenu></TiThMenu>
                        }
                    </div>
                        <ul className={`md:flex justify-end font-bold max-sm:bg-[#3f1d1d] gap-4 rounded-b-md absolute md:static p-2 duration-1000 ${open? "-top-60" : "top-16"}`}>
                            {
                                navList.map(list => <NavLinks key={list.id} list={list}></NavLinks>)
                            }
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center text-white font-bold gap-4  mr-4">
                    <div>
                        <h1>{user?.displayName}</h1>
                    </div>
                    <div className="text-yellow-300">
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