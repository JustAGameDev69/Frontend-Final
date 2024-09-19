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
import { useNavigate } from "react-router-dom";

export default function LoginSignup({ open, handleOpen }) {
  const [loginState, setLoginState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupLoginStatus, setSignupLoginStatus] = useState("");

  const navigate = useNavigate();

  const onChangeLoginSignupState = (state) => {
    setLoginState(state);
    setEmail("");
    setPassword("");
    setName("");
    setSignupLoginStatus("");
  };

  const handleCancel = () => {
    handleOpen((i) => !i);
    setLoginState("login");
    setEmail("");
    setPassword("");
    setName("");
    setSignupLoginStatus("");
  };

  const { isLoading, getUser, createAccount, validateSignup } = useAccount();

  const handleLoginSignUp = async () => {
    if (loginState === "login") {
      if (email && password) {
        const data = await getUser(email, password);
        if (data.account) {
          setSignupLoginStatus(data.message);
          handleCancel();
          if (data.account.email === "admin@gmail.com") {
            navigate("/admin");
          }
        } else {
          setSignupLoginStatus(
            "Tên tài khoản hoặc mật khẩu không đúng! Vui lòng thử lại"
          );
          setPassword("");
        }
      } else {
        setSignupLoginStatus("Bạn cần phải nhập đầy đủ thông tin");
      }
    } else if (loginState === "signup") {
      const { valid, message } = validateSignup(name, email, password);
      if (valid) {
        const account = {
          fullName: name,
          email: email,
          password: password,
          isAdmin: false,
          cart: [],
          avatar: "",
        };
        await createAccount(account);
        setSignupLoginStatus(message);
        handleCancel();
      } else {
        setSignupLoginStatus(message);
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
          {signupLoginStatus && (
            <p className="text-[#E30019] italic mt-3">{signupLoginStatus}</p>
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
                onClick={() => onChangeLoginSignupState("signup")}
              >
                Đăng ký ngay
              </span>
              !
            </p>
          )}
          {loginState === "signup" && (
            <p className="mt-3 mb-3">
              Bạn đã có tài khoản?{" "}
              <span
                className="pageLink"
                onClick={() => onChangeLoginSignupState("login")}
              >
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
          onClick={() => handleCancel()}
          className="mr-1"
          disabled={isLoading}
        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
