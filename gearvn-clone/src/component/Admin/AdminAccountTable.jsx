import { useState } from "react";
import AdminAccountForm from "./AdminAccountForm";

const thStyle = "border border-gray-300 px-4 py-2";
const tdStyle = "border border-gray-300 px-2 py-2 text-center 2xl:px-4";

export default function AdminAccountTable({ users, deleteAccount }) {
  const [open, handleOpen] = useState(false);
  const [account, setAccount] = useState({});

  const handleEditAccount = (user) => {
    setAccount(user);
    handleOpen(true);
  };

  return (
    <>
      {open && (
        <AdminAccountForm
          open={open}
          account={account}
          handleOpen={handleOpen}
        />
      )}
      <table
        className="min-w-full table-auto border-collapse border border-gray-200"
        border="1"
        cellPadding="10"
      >
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className={thStyle}>ID</th>
            <th className={thStyle}>Full Name</th>
            <th className={thStyle}>Email</th>
            <th className={thStyle}>Admin</th>
            <th className={thStyle}>Password</th>
            <th className={thStyle}>Cart</th>
            <th className={thStyle}>Avatar</th>
            <th className={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className={tdStyle}>{user.id}</td>
              <td className={tdStyle}>{user.fullName}</td>
              <td className={tdStyle}>{user.email}</td>
              <td className={tdStyle}>{user.isAdmin ? "Yes" : "No"}</td>
              <td className={tdStyle}>{user.password}</td>
              <td className={tdStyle}>
                {user.cart ? (
                  user.cart.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {user.cart.map((item, idx) => (
                        <li key={idx}>
                          {item.product_name}
                          <p>(Số lượng: {item.product_quantity})</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Cart is empty</p>
                  )
                ) : (
                  <p>No cart</p>
                )}
              </td>
              <td className={tdStyle}>
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt="avatar"
                    width="60"
                    className="rounded"
                  />
                ) : (
                  <p>No avatar</p>
                )}
              </td>
              <td className={`${tdStyle} text-center`}>
                <div className="flex gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleEditAccount(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => deleteAccount(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
