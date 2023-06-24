import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LOGIN, ROOT } from "../config/routeConfig";

const ProtectedAdminRoute = ({ children }) => {
  const { loading, isAuthenticated,user } = useSelector((state) => state.user);
  if (loading === false) {
    // if (!isAuthenticated) {
    //   return <Navigate to="/login" replace />;
    // } else if(user.role !== "Admin"){
    //     return <Navigate to="/" replace />;
    // }
    if (!isAuthenticated) {
      return <Navigate to={LOGIN} replace />;
    } else if(user.role !== "Admin"){
        return <Navigate to={ROOT} replace />;
    }
    return children;
  }
};

export default ProtectedAdminRoute;
