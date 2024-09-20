import { useEffect } from "react";
import { useAccount } from "../../context/AccountContext";
import AdminAccountTable from "./AdminAccountTable";

export default function AccountSectionAdmin() {
  const { accounts, getAllUser } = useAccount();

  useEffect(() => {
    getAllUser();
  }, []);

  console.log(accounts);

  return (
    <div className="bg-white rounded w-3/4 mt-5 mb-5 ml-96 pt-5 pb-5 px-10">
      <h1 className="text-center mb-5 mt-5 text-2xl font-semibold text-[#E30019]">
        ACCOUNTS LIST
      </h1>
      <AdminAccountTable users={accounts} />
    </div>
  );
}
