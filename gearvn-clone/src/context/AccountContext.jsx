import { createContext, useContext, useReducer } from "react";

const AccountContext = createContext();
const BASE_URL = "http://localhost:3001";
const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));

const initialState = {
  accounts: [],
  account: null,
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "accounts/loaded":
      return {
        ...state,
        isLoading: false,
        accounts: action.payload,
      };
    case "account/login":
      return {
        ...state,
        isLoading: false,
        account: action.payload[0],
      };
    case "account/logout":
      return {
        ...state,
        isLoading: false,
        account: initialState.account,
      };
    case "account/signup":
      return {
        ...state,
        isLoading: false,
        account: action.payload,
      };
    case "account/deleted":
      return {
        ...state,
        isLoading: false,
        accounts: state.accounts.filter(
          (account) => account.id !== action.payload
        ),
      };
    case "cart/updated":
      return {
        ...state,
        isLoading: false,
        account: action.payload,
      };
    case "account/updated":
      return {
        ...state,
        isLoading: false,
        account: action.payload,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknow action type");
  }
}

function AccountProvider({ children }) {
  const [{ accounts, account, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function getAllUser() {
    dispatch({ type: "loading" });
    try {
      await delay();
      const res = await fetch(`${BASE_URL}/account`);
      const data = await res.json();
      dispatch({ type: "accounts/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data",
      });
    }
  }

  async function getUser(email, password) {
    dispatch({ type: "loading" });
    try {
      await delay();
      const res = await fetch(
        `${BASE_URL}/account?email=${email}&password=${password}`
      );
      const data = await res.json();
      dispatch({ type: "account/login", payload: data });
      return { account: data[0], message: "Đăng nhập thành công!" };
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data",
      });
    }
  }

  async function LogOut() {
    dispatch({ type: "loading" });
    try {
      await delay();
      dispatch({ type: "account/logout" });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data",
      });
    }
  }

  async function updateUserCart(account, id) {
    dispatch({ type: "loading" });
    try {
      await delay();
      const res = await fetch(`${BASE_URL}/account/${id}`, {
        method: "PUT",
        body: JSON.stringify(account),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "cart/updated", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data",
      });
    }
  }

  async function updateUserCartItems(newCart, id) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/account/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ cart: newCart }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "cart/updated", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data",
      });
    }
  }

  async function updateUserInformation(account, id) {
    dispatch({ type: "loading" });
    try {
      await delay();
      const res = await fetch(`${BASE_URL}/account/${id}`, {
        method: "PUT",
        body: JSON.stringify(account),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "account/updated", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data",
      });
    }
  }

  async function createAccount(account) {
    dispatch({ type: "loading" });
    try {
      await delay();
      const res = await fetch(`${BASE_URL}/account`, {
        method: "POST",
        body: JSON.stringify(account),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "account/signup", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error create account",
      });
    }
  }

  async function deleteAccount(id) {
    dispatch({ type: "loading" });
    try {
      await delay();
      await fetch(`${BASE_URL}/account/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "account/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error delete account",
      });
    }
  }

  function validateSignup(name, email, password) {
    if (!name || name.trim() === "") {
      return { valid: false, message: "Tên không được để trống." };
    }

    if (!email || email.trim() === "") {
      return { valid: false, message: "Email không được để trống." };
    }

    if (!password || password.trim() === "") {
      return { valid: false, message: "Mật khẩu không được để trống." };
    }

    if (!email.includes("@")) {
      return {
        valid: false,
        message: "Định dạng email chưa chính xác! (VD: 123@gmail.com).",
      };
    }

    if (password.length <= 4) {
      return {
        valid: false,
        message: "Mật khẩu phải dài hơn 4 ký tự.",
      };
    }

    return { valid: true, message: "Đăng ký thành công. Vui lòng chờ..." };
  }

  return (
    <AccountContext.Provider
      value={{
        accounts,
        account,
        isLoading,
        getAllUser,
        getUser,
        createAccount,
        validateSignup,
        deleteAccount,
        updateUserCart,
        updateUserInformation,
        LogOut,
        updateUserCartItems,
        error,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

function useAccount() {
  const context = useContext(AccountContext);
  if (context === undefined)
    throw new Error("useAccount must be used within a AccountProvider");
  return context;
}

export { AccountProvider, useAccount };
