import { useEffect, useState } from "react";
import AdminSideBar from "../component/Admin/AdminSideBar";
import ProductSectionAdmin from "../component/Admin/ProductSectionAdmin";
import AccountSectionAdmin from "../component/Admin/AccountSectionAdmin";
import { useAccount } from "../context/AccountContext";
import AdminNoAccessModal from "../component/Admin/AdminNoAccessModal";

export default function AdminPage() {
  const { account } = useAccount();
  const [select, setSelect] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!account || account.isAdmin == false) {
      setOpen(true);
    }
  }, [account]);

  return (
    <div className="relative">
      <AdminSideBar setSelect={setSelect} />
      <AdminNoAccessModal open={open} handleOpen={setOpen} />
      {select === "product" && <ProductSectionAdmin />}
      {select === "accounts" && <AccountSectionAdmin />}
    </div>
  );
}
