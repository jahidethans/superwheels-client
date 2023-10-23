
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location);

 if(loading){
    return <div className="flex items-center justify-center h-screen">
        <div className="loading loading-infinity text-secondary w-[8rem]"></div>
      </div>}
 

  if (!user) {
    return <Navigate state={location.pathname} to='/login'></Navigate>;
  }

  

  return children;
};

export default PrivateRoute;
