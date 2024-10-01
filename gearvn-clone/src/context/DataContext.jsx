import { createContext, useContext, useEffect, useReducer } from "react";

const DataContext = createContext();
const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));

const BASE_URL = "http://localhost:3000";
const initialState = {
  pc: [],
  laptop: [],
  monitor: [],
  keyboard: [],
  mouse: [],
  saleNews: [],
  techNews: [],
  collections: [],
  product: {},
  suggestProducts: [],
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
    case "collections/loaded":
      return {
        ...state,
        isLoading: false,
        collections: action.payload,
      };
    case "product/loaded":
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };
    case "suggestProducts/loaded":
      return {
        ...state,
        isLoading: false,
        suggestProducts: action.payload,
      };
    case "edit/success":
      return {
        ...state,
        isLoading: false,
        collections: state.collections.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "product/deleted":
      return {
        ...state,
        isLoading: false,
        collections: state.collections.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "addProduct":
      return {
        ...state,
        isLoading: false,
        collections: [...state.collections, action.payload],
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
    {
      pc,
      laptop,
      mouse,
      keyboard,
      monitor,
      isLoading,
      saleNews,
      techNews,
      collections,
      product,
      suggestProducts,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const gamingLaptop = [];
  const officeLaptop = [];

  laptop.forEach((obj) => {
    if (obj.title.toLowerCase().includes("gaming")) {
      gamingLaptop.push(obj);
    } else {
      officeLaptop.push(obj);
    }
  });

  useEffect(function () {
    dispatch({ type: "loading" });
    async function fetchData(item) {
      try {
        await delay();
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

  async function getData(id) {
    dispatch({ type: "loading" });
    if (id === "laptop-gaming") {
      await delay();
      dispatch({ type: "collections/loaded", payload: gamingLaptop });
      return;
    } else if (id === "laptop-vanphong") {
      await delay();
      dispatch({ type: "collections/loaded", payload: officeLaptop });
      return;
    }

    try {
      await delay();
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      dispatch({ type: "collections/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data",
      });
    }
  }

  async function updateProduct(product, type, id) {
    dispatch({ type: "loading" });
    try {
      await delay();
      const response = await fetch(`${BASE_URL}/${type}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }
      const data = await response.json();
      dispatch({ type: "edit/success", payload: data });
      return { data, message: "Product updated successfully!" };
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data",
      });
    }
  }

  async function AddProduct(newProduct, type) {
    dispatch({ type: "loading" });
    try {
      await delay();
      const res = await fetch(`${BASE_URL}/${type}`, {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "addProduct", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error create account",
      });
    }
  }

  async function getProductDetail(type, id) {
    dispatch({ type: "loading" });
    if (type === "laptop-gaming" || type === "laptop-vanphong") type = "laptop";

    try {
      await delay();
      const res = await fetch(`${BASE_URL}/${type}/${id}`);
      const data = await res.json();
      dispatch({ type: "product/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data",
      });
    }
  }

  async function deleteProduct(type, id) {
    dispatch({ type: "loading" });
    try {
      await delay();
      await fetch(`${BASE_URL}/${type}/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "product/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error delete product",
      });
    }
  }

  async function getSuggestionProduct(type, number, id) {
    dispatch({ type: "loading" });
    if (type === "laptop-gaming" || type === "laptop-vanphong") type = "laptop";

    try {
      await delay();
      const res = await fetch(`${BASE_URL}/${type}`);
      const data = await res.json();

      //Take number of random suggested products
      const filteredData = data.filter((item) => item.id !== id);
      const shuffled = filteredData.sort(() => 0.5 - Math.random());
      const suggestProducts = shuffled.slice(0, number);
      dispatch({ type: "suggestProducts/loaded", payload: suggestProducts });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data",
      });
    }
  }

  return (
    <DataContext.Provider
      value={{
        pc,
        gamingLaptop,
        officeLaptop,
        mouse,
        keyboard,
        monitor,
        saleNews,
        techNews,
        collections,
        isLoading,
        product,
        suggestProducts,
        getData,
        getProductDetail,
        getSuggestionProduct,
        AddProduct,
        updateProduct,
        deleteProduct,
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
