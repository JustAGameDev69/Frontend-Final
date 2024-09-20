import ProductCardAdmin from "./ProductCardAdmin";

export default function ProductListAdmin({
  data,
  selectedCategories,
  setSelectedCategories,
}) {
  return (
    <>
      <button
        className="w-20 h-10 bg-gray-600 text-white mb-2 rounded hover:bg-gray-700"
        onClick={() => setSelectedCategories("")}
      >
        RETURN
      </button>
      <div className="flex flex-wrap gap-4">
        {data.map((product) => (
          <ProductCardAdmin
            key={product.id}
            product={product}
            selectedCategories={selectedCategories}
          />
        ))}
      </div>
    </>
  );
}
