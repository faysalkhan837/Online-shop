import { useContext } from "react";
import { AuthContext } from "../Component/Provider/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <TbFidgetSpinner className="animate-spin m-auto"/>
    }
    if(user){
        return (children);
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRout;
