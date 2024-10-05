import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";
import { useAccount } from "../../context/AccountContext";
import { Loading } from "../Loading";

export default function AdminAccountForm({ open, account, handleOpen }) {
  const initialState = {
    id: account.id,
    fullName: account.fullName,
    email: account.email,
    isAdmin: account.isAdmin,
    phoneNumber: account.phoneNumber,
    address: account.address,
    personalIntroduction: account.personalIntroduction,
    cart: account.cart,
    password: account.password,
    avatar: account.avatar,
  };

  const { isLoading, AdminUserDataUpdate } = useAccount();
  const [change, setChange] = useState(initialState);

  const handleStatusChange = (productName, newStatus) => {
    const updatedCart = change.cart.map((item) =>
      item.product_name === productName
        ? { ...item, product_status: newStatus }
        : item
    );
    setChange({ ...change, cart: updatedCart });
  };

  const handleUserDataChange = (account, id) => {
    AdminUserDataUpdate(account, id);
  };

  return (
    <Dialog open={open} size={"md"}>
      <DialogHeader className="border-b border-slate-800 text-xl">
        EDIT ACCOUNT
      </DialogHeader>
      <DialogBody className="flex gap-2 mx-auto">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="w-1/2">
              <Typography className="mb-1 mt-2" variant="h6">
                ID
              </Typography>
              <Input label="ID" size="md" value={change.id} disabled />
              <Typography className="mb-1 mt-2" variant="h6">
                Full Name
              </Typography>
              <Input
                label="Full name"
                size="md"
                value={change.fullName}
                onChange={(e) =>
                  setChange({ ...change, fullName: e.target.value })
                }
              />
              <Typography className="mb-1 mt-2" variant="h6">
                Email
              </Typography>
              <Input
                label="Email"
                size="md"
                value={change.email}
                onChange={(e) =>
                  setChange({ ...change, email: e.target.value })
                }
              />
              <Typography className="mb-1 mt-2" variant="h6">
                isAdmin
              </Typography>
              <Select
                value={change.isAdmin === true ? "true" : "false"}
                variant="outlined"
                label="isAdmin"
                onChange={(e) =>
                  setChange({ ...change, isAdmin: e.target.value === "true" })
                }
              >
                <Option value="true">Yes</Option>
                <Option value="false">No</Option>
              </Select>
              <Typography className="mb-1 mt-2" variant="h6">
                Password
              </Typography>
              <Input
                label="Password"
                size="md"
                value={change.password}
                onChange={(e) =>
                  setChange({ ...change, password: e.target.value })
                }
              />
            </div>
            <div className="w-1/2">
              <Typography className="mb-1 mt-2" variant="h6">
                Avatar (URL)
              </Typography>
              <Input
                label="Avatar"
                size="md"
                value={change.avatar ? change.avatar : "No avatar"}
                onChange={(e) =>
                  setChange({ ...change, avatar: e.target.value })
                }
              />
              <Typography className="mb-1 mt-2" variant="h6">
                Cart
              </Typography>
              {change.cart ? (
                change.cart.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {change.cart.map((item, idx) => (
                      <li key={idx}>
                        {item.product_name}{" "}
                        <select
                          value={item.product_status}
                          onChange={(e) =>
                            handleStatusChange(
                              item.product_name,
                              e.target.value
                            )
                          }
                          className="p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-300 ease-in-out text-gray-700"
                        >
                          <option value="cancel">Cancel</option>
                          <option value="waitingConfirm">waitingConfirm</option>
                          <option value="waiting">Waiting</option>
                          <option value="confirm">Confirm</option>
                          <option value="delivering">Delivering</option>
                          <option value="finished">Finished</option>
                        </select>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Cart is empty</p>
                )
              ) : (
                <p>No cart</p>
              )}
            </div>
          </>
        )}
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="green"
          onClick={() => handleUserDataChange(change, change.id)}
        >
          <span>Confirm</span>
        </Button>
        <Button variant="text" color="red" onClick={() => handleOpen(false)}>
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
