import { useState } from "react";

export default function Filter({
  categories = [],
  children,
  dispatch,
  dispatchType,
}) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleGetValue = (e) => {
    setSelectedValue(e.target.value);
    dispatch({ type: dispatchType, payload: e.target.value });
  };

  return (
    <div className="flex items-center mx-2">
      <label className="text-sm font-medium text-red-600 mr-2">
        {children}:
      </label>
      <select
        value={selectedValue}
        onChange={handleGetValue}
        className="w-auto py-1 px-2 border-2 border-red-600 rounded-md bg-white text-red-600 focus:outline-none focus:border-red-400 text-sm"
      >
        {categories.map((category, index) => (
          <option key={index} value={category.value}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
}
