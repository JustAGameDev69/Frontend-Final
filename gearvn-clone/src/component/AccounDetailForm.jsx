import { Typography, Button } from "@material-tailwind/react";

export default function AccounDetailForm({
  edit,
  change,
  setChange,
  changePassword,
  currentPassword,
  newPassword,
  confirmPassword,
  changePasswordState,
  dispatch,
  emptyPasswordChangeForm,
  handleConfirmNewPassword,
}) {
  return (
    <div className="w-2/3 flex flex-col px-4">
      <Typography className="mb-1 mt-2" variant="h6">
        Họ và tên:
      </Typography>
      <input
        disabled={!edit}
        value={change.fullName}
        onChange={(e) => setChange({ ...change, fullName: e.target.value })}
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
            value={currentPassword}
            onChange={(e) =>
              dispatch({
                type: "currentPassword/set",
                payload: e.target.value,
              })
            }
            type="password"
            placeholder="Mật khẩu"
            className="text-xl px-4 py-2 border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
          />
          <Typography className="mb-1 mt-2" variant="h6">
            Mật khẩu mới:
          </Typography>
          <input
            value={newPassword}
            onChange={(e) =>
              dispatch({
                type: "newPassword/set",
                payload: e.target.value,
              })
            }
            type="password"
            placeholder="Mật khẩu"
            className="text-xl px-4 py-2 border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
          />
          <Typography className="mb-1 mt-2" variant="h6">
            Nhập lại mật khẩu mới:
          </Typography>
          <input
            value={confirmPassword}
            onChange={(e) =>
              dispatch({
                type: "confirmPassword/set",
                payload: e.target.value,
              })
            }
            type="password"
            placeholder="Mật khẩu"
            className="text-xl px-4 py-2 border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-gray-700"
          />
          {changePasswordState && (
            <p className="my-2 text-lg text-[#ff0000]">{changePasswordState}</p>
          )}
          <div className="flex gap-2 py-4">
            <Button
              color="red"
              onClick={() => {
                dispatch({ type: "changePassword/set" });
                emptyPasswordChangeForm();
              }}
            >
              Hủy
            </Button>
            <Button
              color="green"
              onClick={() => {
                const updatedAccount = {
                  ...change,
                  password: newPassword,
                };
                handleConfirmNewPassword(updatedAccount);
              }}
            >
              Lưu
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
