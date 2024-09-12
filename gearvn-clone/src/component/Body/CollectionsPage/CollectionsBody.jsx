import { ProductCarousel_Card } from "../SectionCollection/ProductCarousel/ProductCarousel_Card";

export default function CollectionsBody({ products }) {
  return (
    <div className="w-full">
      <div className="content-container bg-white mt-3 mb-3 pt-3 pb-2 rounded">
        <div className="flex flex-wrap gap-1">
          {products.map((product) => (
            <ProductCarousel_Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
