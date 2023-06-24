import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";
import { SHOP_LOGIN } from "../config/routeConfig";

const SellerProtectedRoute = ({ children }) => {
  const { isLoading, isSeller } = useSelector((state) => state.seller);
  if (isLoading === true) {
    return <Loader />;
  } else {
    // if (!isSeller) {
    //   return <Navigate to={`/shop-login`} replace />;
    // }
    if (!isSeller) {
      return <Navigate to={SHOP_LOGIN} replace />;
    }
    return children;
  }
};

export default SellerProtectedRoute;
