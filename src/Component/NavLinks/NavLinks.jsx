import { Link } from "react-router-dom";


const NavLinks = ({ list }) => {
    return (
        <div className="">
            <ul>
                <Link to={list.patch}><li>{list.name}</li></Link>
            </ul>
        </div>
    );
};

export default NavLinks;