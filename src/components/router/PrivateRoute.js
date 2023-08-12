//try to do myself from সারমর্ম khata

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { VarContext } from "../../context/AuthProvider";
import Loading from "../Loading";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(VarContext);
    const location = useLocation();
    console.log(location,'location from Private Route');
    if(loading){
        return <Loading/>
    }
    if(user && user.uid){
        return children;
    }

    return <Navigate to='/login' state={{from :location}} replace></Navigate>
};

export default PrivateRoute;