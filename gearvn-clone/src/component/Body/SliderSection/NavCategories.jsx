import LaptopCategories from "./NavCategoriesComponent/NavCategoriesHover";

export default function NavCategories({ categories }) {
  return (
    <div className="w-4/5 bg-white rounded flex flex-wrap pl-3 pr-3 gap-16 pt-3 pb-3">
      {categories === "Laptop" && <LaptopCategories data={""} />}
      {categories === "Laptop Gaming" && <LaptopCategories data={""} />}
    </div>
  );
}
