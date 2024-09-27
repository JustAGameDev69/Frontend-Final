import { useEffect, useMemo, useReducer } from "react";
import Filter from "./filter";
import { filterCategories } from "./filterCategories.json";
import { Button } from "@material-tailwind/react";

const initialState = {
  filters: {},
};

/* const initialState = {
  priceFilter: "",
  cpuFilter: "",
  vgaFilter: "",
  ramFilter: "",
  ssdFilter: "",
}; */

function reducer(state, action) {
  switch (action.type) {
    case "FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    case "CLEAR_ALL":
      return initialState;
    default:
      return state;
  }
}

/* function reducer(state, action) {
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
} */

export default function FilterComponent({
  products = [],
  setProductss,
  filters = [],
}) {
  const [{ filters: selectedFilters }, dispatch] = useReducer(
    reducer,
    initialState
  );
  /*   const [
    { priceFilter, cpuFilter, vgaFilter, ramFilter, ssdFilter, refreshRate },
    dispatch,
  ] = useReducer(reducer, initialState); */

  const priceRanges = {
    range1: { min: 1000, max: 500000 },
    range2: { min: 500000, max: 1000000 },
    range3: { min: 1000000, max: 5000000 },
    range4: { min: 5000000, max: 10000000 },
    range5: { min: 10000000, max: 20000000 },
    range6: { min: 20000000, max: 30000000 },
    range7: { min: 30000000, max: 50000000 },
    range8: { min: 50000000, max: Infinity },
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const productPrice = parseInt(product.price.replace(/\./g, ""));
      const components = product.components;

      let isWithinPriceRange = true;
      if (selectedFilters.price) {
        const { min, max } = priceRanges[selectedFilters.price];
        isWithinPriceRange = productPrice >= min && productPrice <= max;
      }

      return Object.keys(selectedFilters).every((key) => {
        if (key === "price") return isWithinPriceRange; // Lọc theo giá riêng
        if (!selectedFilters[key]) return true;
        return components[key]
          ?.toLowerCase()
          .includes(selectedFilters[key].toLowerCase());
      });
    });
  }, [selectedFilters, products]);

  useEffect(() => {
    setProductss(filteredProducts);
  }, [filteredProducts, setProductss]);

  /*   const filteredPCs = useMemo(() => {
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
  }, [filteredPCs, setProductss]); */

  return (
    <div className="flex flex-wrap items-center mb-2 gap-2">
      {/*       <Filter
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
      </Filter> */}
      {/*       {Object.entries(filterCategories).map(([key, categories]) => (
        <Filter
          key={key}
          categories={categories}
          dispatch={dispatch}
          dispatchType="FILTER"
        >
          {key.charAt(0).toUpperCase() + key.slice(1).replace("Categories", "")}
        </Filter>
      ))} */}
      {filters.map((filter) => {
        let content;
        if (filter === "price") {
          content = "Giá tiền(VNĐ)";
        } else if (filter === "refreshRate") {
          content = "Tần số quét";
        } else if (filter === "monitor") {
          content = "Thông số màn hình";
        } else if (filter === "size") {
          content = "Kích thước";
        } else if (filter === "resolution") {
          content = "Độ phân giải";
        } else if (filter === "layout") {
          content = "Layout";
        } else if (filter === "keycap") {
          content = "Keycap";
        } else if (filter === "connect") {
          content = "Kết nối";
        } else if (filter === "battery") {
          content = "Pin";
        } else if (filter === "weight") {
          content = "Cân nặng";
        } else if (filter === "height") {
          content = "Chiều cao";
        } else if (filter === "material") {
          content = "Chất liệu";
        } else if (filter === "connectPort") {
          content = "Kiểu kết nối";
        } else if (filter === "headPhoneType") {
          content = "Loại tai nghe";
        } else {
          content = filter;
        }

        return (
          <Filter
            key={filter}
            categories={filterCategories[`${filter}Categories`]}
            dispatch={dispatch}
            dispatchType="FILTER"
            filter={filter}
          >
            {content}
          </Filter>
        );
      })}
      <Button
        className="mx-2"
        color="orange"
        size="sm"
        onClick={() => dispatch({ type: "CLEAR_ALL" })}
      >
        Xóa bộ lọc
      </Button>
    </div>
  );
}
