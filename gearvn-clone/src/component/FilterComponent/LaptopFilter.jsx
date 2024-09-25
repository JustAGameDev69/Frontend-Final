import { useEffect, useMemo, useReducer } from "react";
import Filter from "./filter";
import { filterCategories } from "./filterCategories.json";
import { Button } from "@material-tailwind/react";

const initialState = {
  priceFilter: "",
  cpuFilter: "",
  vgaFilter: "",
  ramFilter: "",
  ssdFilter: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "price/filter":
      return {
        ...state,
        priceFilter: action.payload,
      };
    case "cpu/filter":
      return {
        ...state,
        cpuFilter: action.payload,
      };
    case "vga/filter":
      return {
        ...state,
        vgaFilter: action.payload,
      };
    case "ram/filter":
      return {
        ...state,
        ramFilter: action.payload,
      };
    case "ssd/filter":
      return {
        ...state,
        ssdFilter: action.payload,
      };
    case "refreshRate/filter":
      return {
        ...state,
        refreshRate: action.payload,
      };
    case "clearAll":
      return {
        ...state,
        ssdFilter: initialState.ssdFilter,
        cpuFilter: initialState.cpuFilter,
        vgaFilter: initialState.vgaFilter,
        ramFilter: initialState.ramFilter,
        priceFilter: initialState.priceFilter,
        refreshRate: initialState.refreshRate,
      };
  }
}

export default function LaptopFilter({ products = [], setProductss }) {
  const [
    { priceFilter, cpuFilter, vgaFilter, ramFilter, ssdFilter, refreshRate },
    dispatch,
  ] = useReducer(reducer, initialState);

  const priceRanges = {
    range1: { min: 1000, max: 10000000 },
    range2: { min: 10000000, max: 20000000 },
    range3: { min: 20000000, max: 30000000 },
    range4: { min: 30000000, max: 50000000 },
    range5: { min: 50000000, max: Infinity },
  };

  const filteredPCs = useMemo(() => {
    return products.filter((pc) => {
      const pcPrice = parseInt(pc.price.replace(/\./g, ""));
      const components = pc.components;

      // Lọc theo khoảng giá
      let isWithinPriceRange = true;
      if (priceFilter) {
        const { min, max } = priceRanges[priceFilter];
        isWithinPriceRange = pcPrice >= min && pcPrice <= max;
      }

      return (
        (ramFilter ? components.RAM.toLowerCase().includes(ramFilter) : true) &&
        (vgaFilter ? components.VGA.toLowerCase().includes(vgaFilter) : true) &&
        (cpuFilter ? components.CPU.toLowerCase().includes(cpuFilter) : true) &&
        (ssdFilter ? components.SSD.toLowerCase().includes(ssdFilter) : true) &&
        (refreshRate
          ? components.refreshRate.toLowerCase().includes(refreshRate)
          : true) &&
        isWithinPriceRange
      );
    });
  }, [
    ramFilter,
    vgaFilter,
    cpuFilter,
    ssdFilter,
    priceFilter,
    refreshRate,
    products,
  ]);

  useEffect(() => {
    setProductss(filteredPCs);
  }, [filteredPCs, setProductss]);

  return (
    <div className="flex flex-wrap items-center mb-2">
      <Filter
        categories={filterCategories.price}
        dispatch={dispatch}
        dispatchType={"price/filter"}
      >
        Giá(VNĐ)
      </Filter>
      <Filter
        categories={filterCategories.cpuCategories}
        dispatch={dispatch}
        dispatchType={"cpu/filter"}
      >
        CPU
      </Filter>
      <Filter
        categories={filterCategories.vgaCategories}
        dispatch={dispatch}
        dispatchType={"vga/filter"}
      >
        VGA
      </Filter>
      <Filter
        categories={filterCategories.ramCategories}
        dispatch={dispatch}
        dispatchType={"ram/filter"}
      >
        RAM
      </Filter>
      <Filter
        categories={filterCategories.ssdCategories}
        dispatch={dispatch}
        dispatchType={"ssd/filter"}
      >
        SSD
      </Filter>
      <Filter
        categories={filterCategories.refreshRate}
        dispatch={dispatch}
        dispatchType={"refreshRate/filter"}
      >
        Tần số quét
      </Filter>
      <Button
        className="mx-2 mt-2"
        color="orange"
        size="sm"
        onClick={() => dispatch({ type: "clearAll" })}
      >
        Xóa bộ lọc
      </Button>
    </div>
  );
}
