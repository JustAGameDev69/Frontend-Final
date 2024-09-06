import { createContext, useContext, useEffect, useReducer } from "react";

const DataContext = createContext();

const BASE_URL = "http://localhost:3000";
const initialState = {
  data: {},
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
    case "data/loaded":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
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

function DataProvider({ children }) {
  const [{ data, isLoading }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchData() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/data`);
        const data = await res.json();
        dispatch({ type: "data/loaded", payload: data });
        console.log(data);
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data",
        });
      }
    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("useData must be used within a CitiesProvider");
  return context;
}

export { DataProvider, useData };
