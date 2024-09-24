import { Button } from "@material-tailwind/react";
import ImageTag from "./Body/SliderSection/ImageTag";
import { useReducer, useState } from "react";
import { Loading } from "./Loading";
import AccounDetailForm from "./AccounDetailForm";

const initialState = {
  edit: false,
  changePassword: false,
  newPassword: "",
  confirmPassword: "",
  currentPassword: "",
  changePasswordState: "",
  avatarChange: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "edit/set":
      return {
        ...state,
        edit: action.payload,
      };
    case "changePassword/set":
      return {
        ...state,
        changePassword: !state.changePassword,
      };
    case "currentPassword/set":
      return {
        ...state,
        currentPassword: action.payload,
      };
    case "newPassword/set":
      return {
        ...state,
        newPassword: action.payload,
      };
    case "confirmPassword/set":
      return {
        ...state,
        confirmPassword: action.payload,
      };
    case "changePasswordState/set":
      return {
        ...state,
        changePasswordState: action.payload,
      };
    case "avatarChange/set":
      return {
        ...state,
        avatarChange: !state.avatarChange,
      };
  }
}

export default function AccountDetail({
  account,
  updateUserInformation,
  isLoading,
}) {
  const [
    {
      edit,
      changePassword,
      currentPassword,
      newPassword,
      confirmPassword,
      changePasswordState,
      avatarChange,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [change, setChange] = useState(account);

  const emptyPasswordChangeForm = () => {
    dispatch({
      type: "currentPassword/set",
      payload: "",
    });
    dispatch({
      type: "newPassword/set",
      payload: "",
    });
    dispatch({
      type: "confirmPassword/set",
      payload: "",
    });
    dispatch({
      type: "changePasswordState/set",
      payload: "",
    });
  };

  const handleConfirmNewPassword = (updatedAccount) => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      dispatch({
        type: "changePasswordState/set",
        payload: "Vui lòng nhập toàn bộ các mục!",
      });
      return;
    }

    if (currentPassword != account.password) {
      dispatch({
        type: "changePasswordState/set",
        payload: "Mật khẩu hiện tại không đúng!",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      dispatch({
        type: "changePasswordState/set",
        payload: "Mật khẩu mới và mật khẩu xác định lại không trùng khớp!",
      });
      return;
    }

    if (
      currentPassword == account.password &&
      newPassword === confirmPassword
    ) {
      dispatch({ type: "changePassword/set" });
      updateUserInformation(updatedAccount, account.id);
      emptyPasswordChangeForm();
    }
  };

  const handleAccountDetailChange = (updatedAccount) => {
    updateUserInformation(updatedAccount, account.id);
    dispatch({ type: "edit/set", payload: false });
  };

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
            {avatarChange && (
              <div className="my-4">
                <input
                  className="w-full my-2 text-lg px-2 py-2 block border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
                  value={change.avatar ? change.avatar : ""}
                  onChange={(e) =>
                    setChange({ ...change, avatar: e.target.value })
                  }
                />
                <Button
                  size="sm"
                  color="green"
                  onClick={() => handleAccountDetailChange(change)}
                >
                  Lưu
                </Button>
              </div>
            )}
            <Button
              onClick={() => dispatch({ type: "avatarChange/set" })}
              variant="outlined"
              size="sm"
            >
              Thay đổi Avatar
            </Button>
          </div>
          {isLoading ? (
            <Loading className="my-32" />
          ) : (
            <AccounDetailForm
              edit={edit}
              change={change}
              setChange={setChange}
              changePassword={changePassword}
              currentPassword={currentPassword}
              newPassword={newPassword}
              confirmPassword={confirmPassword}
              changePasswordState={changePasswordState}
              dispatch={dispatch}
              emptyPasswordChangeForm={emptyPasswordChangeForm}
              handleConfirmNewPassword={handleConfirmNewPassword}
            />
          )}
        </div>
        <div className="py-4 text-right">
          <Button
            color="blue-gray"
            size="md"
            className="w-36 mx-2"
            onClick={() => {
              dispatch({ type: "changePassword/set" });
              emptyPasswordChangeForm();
            }}
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
                onClick={() => handleAccountDetailChange(change)}
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
