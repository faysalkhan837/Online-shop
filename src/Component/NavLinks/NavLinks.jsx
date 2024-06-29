import { Link } from "react-router-dom";


const NavLinks = ({ list }) => {
    return (
        <div className="max-sm:hover:bg-slate-500 px-2 rounded-md">
            <Link to={list.patch}><li className="w-full">{list.name}</li></Link>
        </div>
    );
};

export default NavLinks;