import { createContext, useContext, useEffect, useReducer } from "react";

const DataContext = createContext();

const BASE_URL = "http://localhost:3000";
const initialState = {
  pc: [],
  laptop: [],
  monitor: [],
  keyboard: [],
  mouse: [],
  saleNews: [],
  techNews: [],
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
    case "pc/loaded":
      return {
        ...state,
        isLoading: false,
        pc: action.payload,
      };
    case "laptop/loaded":
      return {
        ...state,
        isLoading: false,
        laptop: action.payload,
      };
    case "monitor/loaded":
      return {
        ...state,
        isLoading: false,
        monitor: action.payload,
      };
    case "keyboard/loaded":
      return {
        ...state,
        isLoading: false,
        keyboard: action.payload,
      };
    case "mouse/loaded":
      return {
        ...state,
        isLoading: false,
        mouse: action.payload,
      };
    case "saleNews/loaded":
      return {
        ...state,
        isLoading: false,
        saleNews: action.payload,
      };
    case "techNews/loaded":
      return {
        ...state,
        isLoading: false,
        techNews: action.payload,
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

const categories = [
  "pc",
  "laptop",
  "mouse",
  "keyboard",
  "monitor",
  "saleNews",
  "techNews",
];

function DataProvider({ children }) {
  const [
    { pc, laptop, mouse, keyboard, monitor, isLoading, saleNews, techNews },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    dispatch({ type: "loading" });
    async function fetchData(item) {
      try {
        const res = await fetch(`${BASE_URL}/${item}`);
        const data = await res.json();
        dispatch({ type: `${item}/loaded`, payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data",
        });
      }
    }
    categories.map((item) => fetchData(item));
  }, []);

  return (
    <DataContext.Provider
      value={{
        pc,
        laptop,
        mouse,
        keyboard,
        monitor,
        saleNews,
        techNews,
        isLoading,
      }}
    >
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
