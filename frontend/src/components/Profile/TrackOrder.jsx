import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px]">
            Đơn hàng của bạn đang được shop chuẩn bị.
          </h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
            Đơn đặt hàng của bạn đang trên đường cho đối tác giao hàng.
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Đơn đặt hàng của bạn đang trên đường đến với đối tác giao hàng của
            chúng tôi.
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Đơn đặt hàng của bạn ở trong thành phố của bạn. Nhân viên giao hàng
            của chúng tôi sẽ giao nó.
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Nhân viên giao hàng của chúng tôi đang giao hàng cho bạn.
          </h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px]">Đơn hàng của bạn đã được giao!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">Đổi trả hàng đang được xử lý!</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">Đổi trả hàng thành công!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
