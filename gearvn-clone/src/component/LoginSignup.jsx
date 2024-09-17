import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";

export default function LoginSignup({ open, handleOpen }) {
  const [loginState, setLoginState] = useState("login");

  return (
    <Dialog open={open} size={"xs"} handler={handleOpen}>
      <DialogHeader className="border-b border-slate-800 text-xl">
        ĐĂNG NHẬP HOẶC TẠO TÀI KHOẢN
      </DialogHeader>
      <DialogBody>
        {loginState === "signup" && (
          <>
            <Typography className="mb-1 mt-2" variant="h6">
              Họ và tên
            </Typography>
            <Input label="Họ và tên" size="lg" />
          </>
        )}
        <Typography className="mb-1 mt-2" variant="h6">
          Email
        </Typography>
        <Input label="Email" size="lg" />
        <Typography className="mb-1 mt-2" variant="h6">
          Mật khẩu
        </Typography>
        <Input label="Password" size="lg" />
        {loginState == "login" && (
          <p className="text-right mt-2 mb-2 italic">Quên mật khẩu?</p>
        )}
        <Button className="w-full h-12 rounded bg-[#E30019] mt-3">
          {loginState === "login" ? "ĐĂNG NHẬP" : "ĐĂNG KÝ"}
        </Button>
        {loginState === "login" && (
          <p className="mt-3 mb-3">
            Bạn chưa có tài khoản?{" "}
            <span className="pageLink" onClick={() => setLoginState("signup")}>
              Đăng ký ngay
            </span>
            !
          </p>
        )}
        {loginState === "signup" && (
          <p className="mt-3 mb-3">
            Bạn đã có tài khoản?{" "}
            <span className="pageLink" onClick={() => setLoginState("login")}>
              Đăng nhập ngay
            </span>
            !
          </p>
        )}
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={() => handleOpen(false)}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
