import { useEffect, useState } from "react";
import { useAccount } from "../../context/AccountContext";
import CartItems from "./CartItems";

export default function UserCart() {
  const { account, updateUserCartItems } = useAccount();
  const [cart, setCart] = useState(account ? account.cart : []);
  const [selectedItems, setSelectedItems] = useState([]);

  const totalPrice = selectedItems.reduce((total, item) => {
    const numericPrice = parseInt(item.product_price.replace(/\./g, ""), 10);
    return total + numericPrice * item.product_quantity;
  }, 0);

  const handleSelectItem = (item, isChecked) => {
    if (isChecked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) =>
        prev.filter(
          (selectedItem) => selectedItem.product_id !== item.product_id
        )
      );
    }
  };

  /*   const handleConfirmOrder = (selectedItems) => {
    const itemConfirm = selectedItems.map((item) => {
      return { ...item, product_status: "waitingConfirm" };
    });
    const currentCart = account.cart.filter(
      (product) => product.product_status !== "waiting"
    );
    const newCart = [...itemConfirm, ...currentCart];
    console.log(newCart);
  }; */

  useEffect(() => {
    setSelectedItems((prevSelected) =>
      prevSelected.map(
        (item) =>
          cart.find((cartItem) => cartItem.product_id === item.product_id) ||
          item
      )
    );
  }, [cart]);

  return (
    <div className="w-full mt-2 mb-2">
      <div className="bg-white content-container rounded px-10 py-10">
        {account ? (
          <>
            <h1 className="text-2xl font-semibold italic border-b border-slate-800">
              GIỎ HÀNG CỦA{" "}
              <span className="text-[#ff0000]">{account.fullName}</span>
            </h1>
            {cart[0] ? (
              <>
                <p>(Tick chọn vào sản phẩm bạn muốn thanh toán nhé!)</p>
                <div className="grid grid-cols-1 gap-4">
                  {cart.map((item, index) => (
                    <CartItems
                      key={index}
                      item={item}
                      handleSelectItem={handleSelectItem}
                      updateUserCartItems={updateUserCartItems}
                      setCart={setCart}
                      cart={cart}
                      accountId={account.id}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between  mt-8">
                  <h2 className="text-lg">
                    Tổng tiền:{" "}
                    <span className="text-[#ff0000] font-semibold italic">
                      {totalPrice.toLocaleString("vi-VN")}
                    </span>{" "}
                    VNĐ
                  </h2>
                  <button className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out border border-transparent">
                    Xác nhận mua hàng
                  </button>
                </div>
              </>
            ) : (
              <h1 className="my-40 text-2xl text-center text-[#ff0000] font-semibold italic">
                Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy tìm cho mình một
                sản phẩm nhé!
              </h1>
            )}
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
  );
}
