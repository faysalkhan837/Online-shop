import { Link } from "react-router-dom";


const NavLinks = ({ list }) => {
    return (
        <Link to={list.patch}><li className="w-full">{list.name}</li></Link>
    );
};

export default NavLinks;