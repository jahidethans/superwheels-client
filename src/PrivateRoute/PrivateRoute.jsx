
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location);

 
 

  if (!user?.email) {
    return <Navigate state={location.pathname} to='/login'></Navigate>;
  }

  

  return children;
};

export default PrivateRoute;
