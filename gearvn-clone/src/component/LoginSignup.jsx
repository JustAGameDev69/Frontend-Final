import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { Loading } from "./Loading";
import { useState } from "react";
import { useAccount } from "../context/AccountContext";

export default function LoginSignup({ open, handleOpen }) {
  const [loginState, setLoginState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { account, isLoading, getUser, createAccount } = useAccount();

  console.log(account);

  const handleLoginSignUp = () => {
    if (loginState === "login") {
      if (password && email) {
        getUser(email, password);
      } else {
        console.log("Nhap day du thong tin!");
      }
    } else if (loginState === "signup") {
      if (name && email && password) {
        const account = {
          fullName: name,
          email: email,
          password: password,
          isAdmin: false,
          cart: [],
        };
        createAccount(account);
      } else {
        console.log("Nhap day du thong tin!");
      }
    }
  };

  return (
    <Dialog open={open} size={"xs"} handler={handleOpen}>
      <DialogHeader className="border-b border-slate-800 text-xl">
        ĐĂNG NHẬP HOẶC TẠO TÀI KHOẢN
      </DialogHeader>
      {isLoading ? (
        <Loading className="mt-12 mb-5" />
      ) : (
        <DialogBody>
          {loginState === "signup" && (
            <>
              <Typography className="mb-1 mt-2" variant="h6">
                Họ và tên
              </Typography>
              <Input
                label="Họ và tên"
                size="lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          )}
          <Typography className="mb-1 mt-2" variant="h6">
            Email
          </Typography>
          <Input
            label="Email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Typography className="mb-1 mt-2" variant="h6">
            Mật khẩu
          </Typography>
          <Input
            type="password"
            label="Password"
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loginState == "login" && (
            <p className="text-right mt-2 mb-2 italic">Quên mật khẩu?</p>
          )}
          <Button
            className={`w-full h-12 rounded bg-[#E30019] ${
              loginState === "login" ? "mt-3" : "mt-6"
            }`}
            onClick={() => handleLoginSignUp()}
          >
            {loginState === "login" ? "ĐĂNG NHẬP" : "ĐĂNG KÝ"}
          </Button>
          {loginState === "login" && (
            <p className="mt-3 mb-3">
              Bạn chưa có tài khoản?{" "}
              <span
                className="pageLink"
                onClick={() => setLoginState("signup")}
              >
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
      )}

      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={() => handleOpen(false)}
          className="mr-1"
          disabled={isLoading}
        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
