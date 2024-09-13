import { useData } from "../../../context/dataContext";
import { Loading } from "../../Loading";
import { ProductCarousel_Card } from "../SectionCollection/ProductCarousel/ProductCarousel_Card";

export default function CollectionsBody({ products = [], categories = "" }) {
  const { isLoading } = useData();

  return (
    <div className="w-full">
      <div className="content-container bg-white mt-3 mb-3 pt-3 pb-2 rounded">
        <div className="border-b border-slate-800 mb-5">
          <h1 className="pt-2 pb-2 pl-2 text-xl italic font-semibold">
            TOÀN BỘ SẢN PHẨM
          </h1>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-wrap gap-1">
            {products.map((product) => (
              <ProductCarousel_Card
                key={product.id}
                product={product}
                categories={categories}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
