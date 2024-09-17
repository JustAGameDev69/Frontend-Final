import { createContext, useContext, useReducer } from "react";

const AccountContext = createContext();
const BASE_URL = "http://localhost:3001";
const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));

const initialState = {
  account: {},
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
    case "account/login":
      return {
        ...state,
        isLoading: false,
        account: action.payload,
      };
    case "account/signup":
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
  const [{ account, isLoading }, dispatch] = useReducer(reducer, initialState);

  async function getUser(email, password) {
    dispatch({ type: "loading" });
    try {
      await delay();
      const res = await fetch(
        `${BASE_URL}/account?email=${email}&password=${password}`
      );
      const data = await res.json();
      dispatch({ type: "account/login", payload: data });
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

  return (
    <AccountContext.Provider
      value={{ account, isLoading, getUser, createAccount }}
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
