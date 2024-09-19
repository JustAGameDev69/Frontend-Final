import CategoriesItem from "./CategoriesItem";
import { categories } from "../categories.json";

export default function SectionCategories() {
  return (
    <div className="content-container bg-white rounded mb-3">
      <div className="w-full border-b border-slate-800">
        <h4 className="pl-3 pt-2 pb-2" style={{ fontSize: "22px" }}>
          Danh mục sản phẩm
        </h4>
      </div>
      <div className="w-full flex flex-wrap pt-2">
        {categories.map((item) => (
          <CategoriesItem item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}
