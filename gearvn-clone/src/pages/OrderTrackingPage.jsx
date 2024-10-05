import { useState } from "react";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import { useAccount } from "../context/AccountContext";

export default function OrderTrackingPage() {
  const { account } = useAccount();
  //const [cart, setCart] = useState(account ? account.cart : []);
  const cart = account ? account.cart : [];
  const [activeTab, setActiveTab] = useState("waitingConfirm");

  const getStatusLabel = (status) => {
    switch (status) {
      case "waitingConfirm":
        return "Chờ xác nhận";
      case "confirm":
        return "Đã xác nhận";
      case "delivering":
        return "Đang giao hàng";
      case "cancel":
        return "Đơn đã bị hủy";
      case "finished":
        return "Giao hàng thành công";
      default:
        return "";
    }
  };

  const filteredProducts = (status) => {
    return cart.filter((product) => product.product_status === status);
  };

  return (
    <>
      <Header />
      <div className="w-full mt-3 mb-3">
        <div className="flex content-container">
          <button
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "waitingConfirm"
                ? "bg-teal-500 text-white"
                : "bg-white"
            }`}
            onClick={() => setActiveTab("waitingConfirm")}
          >
            Chờ xác nhận
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "confirm" ? "bg-teal-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("confirm")}
          >
            Đã xác nhận
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "delivering" ? "bg-teal-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("delivering")}
          >
            Đang giao hàng
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "cancel" ? "bg-teal-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("cancel")}
          >
            Đã hủy
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "finished" ? "bg-teal-500 text-white" : "bg-white"
            }`}
            onClick={() => setActiveTab("finished")}
          >
            Lịch sử mua hàng
          </button>
        </div>
        <div className="bg-white content-container rounded px-10">
          {account ? (
            <>
              <div className="w-full">
                <div className="p-4 bg-white rounded-lg pb-80">
                  <h1 className="text-xl font-semibold border-b text-[#ff0000] italic">
                    {activeTab === "waitingConfirm" &&
                      "Vui lòng chờ xác nhận đơn hàng!"}
                    {activeTab === "confirm" &&
                      "Đơn hàng đã được xác nhận và đang được chúng tôi chuẩn bị!"}
                    {activeTab === "delivering" &&
                      "Đơn hàng đang được giao đến bạn trong thời gian sớm nhất!"}
                    {activeTab === "cancel" &&
                      "Đơn hàng đã bị hủy vì một số lý do. Vui lòng liên hệ để biết thêm thông tin chi tiết!"}
                    {activeTab === "finished" &&
                      "Đơn hàng đã được giao thành công, cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!"}
                  </h1>
                  {filteredProducts(activeTab).map((product) => (
                    <>
                      <div
                        key={product.product_id}
                        className="flex items-center border-b py-8"
                      >
                        <img
                          src={product.product_image}
                          alt={product.product_name}
                          className="w-32 h-32 mr-4 border rounded"
                        />
                        <div className="flex-1">
                          <p className="text-xl font-semibold">
                            {product.product_name}
                          </p>
                          <p className="text-lg text-gray-600">
                            Trạng thái: {getStatusLabel(product.product_status)}
                          </p>
                          <p className="text-lg text-gray-600">
                            Số lượng: {product.product_quantity}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                  {filteredProducts(activeTab).length === 0 && (
                    <p className="text-xl text-center text-gray-500 mt-20">
                      Chưa có sản phẩm nào ở đây cả!
                    </p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full">
                <img
                  className="mx-auto"
                  src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
                />
              </div>
              <h1 className="text-2xl text-[#ff0000] font-semibold pt-10 pb-10 text-center">
                BẠN CHƯA ĐĂNG NHẬP. HÃY ĐĂNG NHẬP HOẶC TẠO TÀI KHOẢN ĐỂ MUA HÀNG
                NHÉ!
              </h1>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
