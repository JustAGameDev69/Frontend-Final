import ProductCardAdmin from "./ProductCardAdmin";

export default function ProductListAdmin({ data }) {
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((product) => (
        <ProductCardAdmin key={product.id} product={product} />
      ))}
    </div>
  );
}
