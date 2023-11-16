import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const {isLoading, user} = useContext(AuthContext);
  const location = useLocation();
  if (isLoading) {
    return <span className="loading loading-bars loading-lg"></span>
  }
  if (user) {
    return children
  }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;


