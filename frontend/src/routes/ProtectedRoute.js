import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LOGIN } from "../config/routeConfig";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  if (loading === false) {
    // if (!isAuthenticated) {
    //   return <Navigate to="/login" replace />;
    // }
    if (!isAuthenticated) {
      return <Navigate to={LOGIN} replace />;
    }
    return children;
  }
};

export default ProtectedRoute;
