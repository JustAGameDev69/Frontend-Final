import { useEffect, useState } from "react";
import AdminSideBar from "../component/Admin/AdminSideBar";
import ProductSectionAdmin from "../component/Admin/ProductSectionAdmin";
import AccountSectionAdmin from "../component/Admin/AccountSectionAdmin";
import { useAccount } from "../context/AccountContext";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const { account } = useAccount();
  const navigate = useNavigate();
  const [select, setSelect] = useState();

  useEffect(() => {
    if (!account || account.isAdmin == false) {
      navigate("/");
    }
  }, [account, navigate]);

  return (
    <div className="relative">
      <AdminSideBar setSelect={setSelect} />
      {select === "product" && <ProductSectionAdmin />}
      {select === "accounts" && <AccountSectionAdmin />}
    </div>
  );
}
