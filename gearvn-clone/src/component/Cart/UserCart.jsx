import { useAccount } from "../../context/AccountContext";

export default function UserCard() {
  const { account } = useAccount();

  return (
    <div className="w-full mt-2 mb-2">
      <div className="bg-white content-container rounded px-10 py-10">
        {account ? (
          <>
            {" "}
            <h1 className="text-2xl font-semibold italic">
              GIỎ HÀNG CỦA{" "}
              <span className="text-[#ff0000]">{account.fullName}</span>
            </h1>
            <div className="grid grid-cols-1 gap-4">
              {account.cart.map((item) => (
                <div
                  key={item.product_id}
                  className="flex items-center bg-white shadow-md rounded-lg p-4"
                >
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1">
                    <p className="text-lg font-semibold">{item.product_name}</p>
                    <p className="text-sm text-gray-500">
                      {item.product_price}
                    </p>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    Del
                  </button>
                </div>
              ))}
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
  );
}
