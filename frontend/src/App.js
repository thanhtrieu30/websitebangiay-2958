import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
  OrderDetailsPage,
  TrackOrderPage,
  UserInbox,
} from "./routes/Routes.js";
import {
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage,
  ShopAllOrders,
  ShopOrderDetails,
  ShopAllRefunds,
  ShopSettingsPage,
  ShopWithDrawMoneyPage,
  ShopInboxPage,
} from "./routes/ShopRoutes";
import {
  AdminDashboardPage,
  AdminDashboardUsers,
  AdminDashboardSellers,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardEvents,
  AdminDashboardWithdraw
} from "./routes/AdminRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import { ShopHomePage } from "./ShopRoutes.js";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import axios from "axios";
import { server } from "./server";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ACTIVATION_ACTIVATIONTOKEN, ADMIN_DASHBOARD, ADMIN_EVENT, ADMIN_ORDERS, ADMIN_PRODUCTS, ADMIN_SELLER, ADMIN_USERS, ADMIN_WITHDRAW_REQUEST, BEST_SELLING, CHECKOUT, DASHBOARD, DASHBOARD_COUPOUNS, DASHBOARD_CREATE_EVENT, DASHBOARD_CREATE_PRODUCT, DASHBOARD_EVENTS, DASHBOARD_MESSAGES, DASHBOARD_ORDERS, DASHBOARD_PRODUCTS, DASHBOARD_REFUNDS, DASHBOARD_WITHDRAW_MONEY, EVENTS, FAQ, INBOX, LOGIN, ORDER_ID, ORDER_SUCCESS, PAYMENT, PRODUCTS, PRODUCT_ID, PROFILE, ROOT, SELLER_ACTIVATION_ACTIVATIONTOKEN, SETTINGS, SHOP_CREATE, SHOP_ID, SHOP_LOGIN, SHOP_PREVIEW_ID, SIGNUP, USER_ORDER_ID, USER_TRACK_ORDER_ID } from "./config/routeConfig";

const App = () => {
  const [stripeApikey, setStripeApiKey] = useState("");

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    getStripeApikey();
  }, []);

  return (
    // <BrowserRouter>
    //   {stripeApikey && (
    //     <Elements stripe={loadStripe(stripeApikey)}>
    //       <Routes>
    //         <Route
    //           path="/payment"
    //           element={
    //             <ProtectedRoute>
    //               <PaymentPage />
    //             </ProtectedRoute>
    //           }
    //         />
    //       </Routes>
    //     </Elements>
    //   )}
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/sign-up" element={<SignupPage />} />
    //     <Route
    //       path="/activation/:activation_token"
    //       element={<ActivationPage />}
    //     />
    //     <Route
    //       path="/seller/activation/:activation_token"
    //       element={<SellerActivationPage />}
    //     />
    //     <Route path="/products" element={<ProductsPage />} />
    //     <Route path="/product/:id" element={<ProductDetailsPage />} />
    //     <Route path="/best-selling" element={<BestSellingPage />} />
    //     <Route path="/events" element={<EventsPage />} />
    //     <Route path="/faq" element={<FAQPage />} />
    //     <Route
    //       path="/checkout"
    //       element={
    //         <ProtectedRoute>
    //           <CheckoutPage />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route path="/order/success" element={<OrderSuccessPage />} />
    //     <Route
    //       path="/profile"
    //       element={
    //         <ProtectedRoute>
    //           <ProfilePage />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/inbox"
    //       element={
    //         <ProtectedRoute>
    //           <UserInbox />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/user/order/:id"
    //       element={
    //         <ProtectedRoute>
    //           <OrderDetailsPage />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/user/track/order/:id"
    //       element={
    //         <ProtectedRoute>
    //           <TrackOrderPage />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
    //     {/* shop Routes */}
    //     <Route path="/shop-create" element={<ShopCreatePage />} />
    //     <Route path="/shop-login" element={<ShopLoginPage />} />
    //     <Route
    //       path="/shop/:id"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopHomePage />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/settings"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopSettingsPage />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/dashboard"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopDashboardPage />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/dashboard-create-product"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopCreateProduct />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/dashboard-orders"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopAllOrders />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/dashboard-refunds"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopAllRefunds />
    //         </SellerProtectedRoute>
    //       }
    //     />

    //     <Route
    //       path="/order/:id"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopOrderDetails />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/dashboard-products"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopAllProducts />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/dashboard-create-event"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopCreateEvents />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/dashboard-events"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopAllEvents />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/dashboard-coupouns"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopAllCoupouns />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/dashboard-withdraw-money"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopWithDrawMoneyPage />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/dashboard-messages"
    //       element={
    //         <SellerProtectedRoute>
    //           <ShopInboxPage />
    //         </SellerProtectedRoute>
    //       }
    //     />
    //     {/* Admin Routes */}
    //     <Route
    //       path="/admin/dashboard"
    //       element={
    //         <ProtectedAdminRoute>
    //           <AdminDashboardPage />
    //         </ProtectedAdminRoute>
    //       }
    //     />
    //     <Route
    //       path="/admin-users"
    //       element={
    //         <ProtectedAdminRoute>
    //           <AdminDashboardUsers />
    //         </ProtectedAdminRoute>
    //       }
    //     />
    //     <Route
    //       path="/admin-sellers"
    //       element={
    //         <ProtectedAdminRoute>
    //           <AdminDashboardSellers />
    //         </ProtectedAdminRoute>
    //       }
    //     />
    //     <Route
    //       path="/admin-orders"
    //       element={
    //         <ProtectedAdminRoute>
    //           <AdminDashboardOrders />
    //         </ProtectedAdminRoute>
    //       }
    //     />
    //      <Route
    //       path="/admin-products"
    //       element={
    //         <ProtectedAdminRoute>
    //           <AdminDashboardProducts />
    //         </ProtectedAdminRoute>
    //       }
    //     />
    //      <Route
    //       path="/admin-events"
    //       element={
    //         <ProtectedAdminRoute>
    //           <AdminDashboardEvents />
    //         </ProtectedAdminRoute>
    //       }
    //     />
    //      <Route
    //       path="/admin-withdraw-request"
    //       element={
    //         <ProtectedAdminRoute>
    //           <AdminDashboardWithdraw />
    //         </ProtectedAdminRoute>
    //       }
    //     />
    //   </Routes>
    //   <ToastContainer
    //     position="bottom-center"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="dark"
    //   />
    // </BrowserRouter>
    <BrowserRouter>
      {stripeApikey && (
        <Elements stripe={loadStripe(stripeApikey)}>
          <Routes>
            <Route
              path={PAYMENT}
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Elements>
      )}
      <Routes>
        <Route path={ROOT} element={<HomePage />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={SIGNUP} element={<SignupPage />} />
        <Route
          path={ACTIVATION_ACTIVATIONTOKEN}
          element={<ActivationPage />}
        />
        <Route
          path={SELLER_ACTIVATION_ACTIVATIONTOKEN}
          element={<SellerActivationPage />}
        />
        <Route path={PRODUCTS} element={<ProductsPage />} />
        <Route path={PRODUCT_ID} element={<ProductDetailsPage />} />
        <Route path={BEST_SELLING} element={<BestSellingPage />} />
        <Route path={EVENTS} element={<EventsPage />} />
        <Route path={FAQ} element={<FAQPage />} />
        <Route
          path={CHECKOUT}
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route path={ORDER_SUCCESS} element={<OrderSuccessPage />} />
        <Route
          path={PROFILE}
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={INBOX}
          element={
            <ProtectedRoute>
              <UserInbox />
            </ProtectedRoute>
          }
        />
        <Route
          path={USER_ORDER_ID}
          element={
            <ProtectedRoute>
              <OrderDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={USER_TRACK_ORDER_ID}
          element={
            <ProtectedRoute>
              <TrackOrderPage />
            </ProtectedRoute>
          }
        />
        <Route path={SHOP_PREVIEW_ID} element={<ShopPreviewPage />} />
        {/* shop Routes */}
        <Route path={SHOP_CREATE} element={<ShopCreatePage />} />
        <Route path={SHOP_LOGIN} element={<ShopLoginPage />} />
        <Route
          path={SHOP_ID}
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path={SETTINGS}
          element={
            <SellerProtectedRoute>
              <ShopSettingsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path={DASHBOARD}
          element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path={DASHBOARD_CREATE_PRODUCT}
          element={
            <SellerProtectedRoute>
              <ShopCreateProduct />
            </SellerProtectedRoute>
          }
        />
        <Route
          path={DASHBOARD_ORDERS}
          element={
            <SellerProtectedRoute>
              <ShopAllOrders />
            </SellerProtectedRoute>
          }
        />
        <Route
          path={DASHBOARD_REFUNDS}
          element={
            <SellerProtectedRoute>
              <ShopAllRefunds />
            </SellerProtectedRoute>
          }
        />

        <Route
          path={ORDER_ID}
          element={
            <SellerProtectedRoute>
              <ShopOrderDetails />
            </SellerProtectedRoute>
          }
        />
        <Route
          path={DASHBOARD_PRODUCTS}
          element={
            <SellerProtectedRoute>
              <ShopAllProducts />
            </SellerProtectedRoute>
          }
        />
        <Route
          path={DASHBOARD_CREATE_EVENT}
          element={
            <SellerProtectedRoute>
              <ShopCreateEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path={DASHBOARD_EVENTS}
          element={
            <SellerProtectedRoute>
              <ShopAllEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path={DASHBOARD_COUPOUNS}
          element={
            <SellerProtectedRoute>
              <ShopAllCoupouns />
            </SellerProtectedRoute>
          }
        />
        <Route
          path={DASHBOARD_WITHDRAW_MONEY}
          element={
            <SellerProtectedRoute>
              <ShopWithDrawMoneyPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path={DASHBOARD_MESSAGES}
          element={
            <SellerProtectedRoute>
              <ShopInboxPage />
            </SellerProtectedRoute>
          }
        />
        {/* Admin Routes */}
        <Route
          path={ADMIN_DASHBOARD}
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path={ADMIN_USERS}
          element={
            <ProtectedAdminRoute>
              <AdminDashboardUsers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path={ADMIN_SELLER}
          element={
            <ProtectedAdminRoute>
              <AdminDashboardSellers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path={ADMIN_ORDERS}
          element={
            <ProtectedAdminRoute>
              <AdminDashboardOrders />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path={ADMIN_PRODUCTS}
          element={
            <ProtectedAdminRoute>
              <AdminDashboardProducts />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path={ADMIN_EVENT}
          element={
            <ProtectedAdminRoute>
              <AdminDashboardEvents />
            </ProtectedAdminRoute>
          }
        />
         <Route
          path={ADMIN_WITHDRAW_REQUEST}
          element={
            <ProtectedAdminRoute>
              <AdminDashboardWithdraw />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
