import { useState } from "react";
import AdminSideBar from "../component/Admin/AdminSideBar";
import ProductSectionAdmin from "../component/Admin/ProductSectionAdmin";

export default function AdminPage() {
  const [select, setSelect] = useState();

  return (
    <div className="relative">
      <AdminSideBar setSelect={setSelect} />
      {select === "product" && <ProductSectionAdmin />}
    </div>
  );
}
