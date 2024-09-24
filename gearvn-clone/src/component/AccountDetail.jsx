import { Typography, Button } from "@material-tailwind/react";
import ImageTag from "./Body/SliderSection/ImageTag";
import { useReducer, useState } from "react";

const initialState = {
  edit: false,
  changePassword: false,
  newPassword: "",
  confirmPassword: "",
  reConfirmPassword: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "edit/set":
      return {
        ...state,
        edit: action.payload,
      };
  }
}

export default function AccountDetail({ account }) {
  const [{ edit }, dispatch] = useReducer(initialState);
  const [change, setChange] = useState(account);
  const [changePassword, setChangePassword] = useState(reducer, false);

  return (
    <>
      <h1 className="text-3xl font-semibold italic py-3 mb-10 tracking-wide border-b">
        THÔNG TIN TÀI KHOẢN:
      </h1>
      <div className="my-2">
        <div className="flex border-b pb-2">
          <div className="w-1/3 pt-6 text-center">
            <ImageTag containerStyle="w-56 mx-auto mb-5" imgStyle="rounded">
              {account.avatar
                ? account.avatar
                : "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"}
            </ImageTag>
            <Button variant="outlined" size="sm" className="">
              Thay đổi Avatar
            </Button>
          </div>
          <div className="w-2/3 flex flex-col px-4">
            <Typography className="mb-1 mt-2" variant="h6">
              Họ và tên:
            </Typography>
            <input
              disabled={!edit}
              value={change.fullName}
              onChange={(e) =>
                setChange({ ...change, fullName: e.target.value })
              }
              type="text"
              placeholder="Tên đầy đủ"
              className="text-xl px-4 py-2 border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
            />
            <Typography type="email" className="mb-1 mt-2" variant="h6">
              Email:
            </Typography>
            <input
              disabled={!edit}
              value={change.email}
              onChange={(e) => setChange({ ...change, email: e.target.value })}
              type="email"
              placeholder="Email"
              className="text-xl px-4 py-2 border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
            />
            <Typography className="mb-1 mt-2" variant="h6">
              Số điện thoại:
            </Typography>
            <input
              disabled={!edit}
              type="number"
              placeholder="SĐT"
              className="text-xl px-4 py-2 border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
            />
            <Typography className="mb-1 mt-2" variant="h6">
              Địa chỉ:
            </Typography>
            <input
              disabled={!edit}
              type="text"
              placeholder="Địa chỉ cụ thể"
              className="text-xl px-4 py-2 border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
            />
            <Typography className="mb-1 mt-2" variant="h6">
              Giới thiệu bản thân:
            </Typography>
            <textarea
              disabled={!edit}
              type="text"
              placeholder="Một chút về bạn..."
              className="text-xl px-4 py-2 border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
              rows="3"
            />
            {changePassword && (
              <>
                <Typography className="mb-1 mt-2" variant="h6">
                  Nhập mật khẩu hiện tại:
                </Typography>
                <input
                  disabled={!edit}
                  value={change.password}
                  onChange={(e) =>
                    setChange({ ...change, password: e.target.value })
                  }
                  type="password"
                  placeholder="Mật khẩu"
                  className="text-xl px-4 py-2 border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
                />
                <Typography className="mb-1 mt-2" variant="h6">
                  Mật khẩu mới:
                </Typography>
                <input
                  disabled={!edit}
                  value={change.password}
                  onChange={(e) =>
                    setChange({ ...change, password: e.target.value })
                  }
                  type="password"
                  placeholder="Mật khẩu"
                  className="text-xl px-4 py-2 border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
                />
                <Typography className="mb-1 mt-2" variant="h6">
                  Nhập lại mật khẩu mới:
                </Typography>
                <input
                  disabled={!edit}
                  value={change.password}
                  onChange={(e) =>
                    setChange({ ...change, password: e.target.value })
                  }
                  type="password"
                  placeholder="Mật khẩu"
                  className="text-xl px-4 py-2 border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
                />
                <div className="flex gap-2 py-4">
                  <Button onClick={() => setChangePassword(false)}>Hủy</Button>
                  <Button onClick={() => setChangePassword(false)}>Lưu</Button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="py-4 text-right">
          <Button
            color="blue-gray"
            size="md"
            className="w-36 mx-2"
            onClick={() => setChangePassword(true)}
          >
            Đổi mật khẩu
          </Button>
          {edit ? (
            <>
              <Button
                className="mx-2"
                color="red"
                onClick={() => dispatch({ type: "edit/set", payload: false })}
              >
                Hủy
              </Button>
              <Button
                className="mx-2"
                color="green"
                onClick={() => dispatch({ type: "edit/set", payload: false })}
              >
                Lưu
              </Button>
            </>
          ) : (
            <Button
              color="indigo"
              className="mx-2"
              onClick={() => dispatch({ type: "edit/set", payload: true })}
            >
              Chỉnh sửa
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
