import { useState } from "react";
import { useAccount } from "../context/AccountContext";
import AccountDetail from "./AccountDetail";
import PleaseLoginModal from "./Cart/PleaseLoginModal";
import { useNavigate } from "react-router-dom";

export default function AccountPageBody() {
  const { account, updateUserInformation, isLoading, LogOut } = useAccount();
  const [open, handleOpen] = useState(!account);
  const navigate = useNavigate();

  const handleOnClick = () => {
    handleOpen(false);
    navigate("/");
  };

  return (
    <div className="content-container bg-white mt-3 mb-3 rounded px-8 py-5">
      {account ? (
        <AccountDetail
          account={account}
          updateUserInformation={updateUserInformation}
          isLoading={isLoading}
          logOut={LogOut}
        />
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
      <PleaseLoginModal
        open={open}
        handleOpen={handleOpen}
        content={"Vui lòng đăng nhập trước khi truy cập trang này!"}
        onClickFunction={handleOnClick}
      />
    </div>
  );
}
