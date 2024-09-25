import { Link } from "react-router-dom";
import { useData } from "../../../context/dataContext";
import { Loading } from "../../Loading";
import { ProductCarousel_Card } from "../SectionCollection/ProductCarousel/ProductCarousel_Card";
import PcFilter from "../../FilterComponent/PcFilter";
import { useState } from "react";
import LaptopFilter from "../../FilterComponent/LaptopFilter";

export default function CollectionsBody({ products = [], categories = "" }) {
  const { isLoading } = useData();
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className="w-full">
      <div className="content-container bg-white mt-3 mb-3 pt-3 pb-2 rounded">
        <div className="border-b border-slate-800 mb-5">
          <h1 className="pt-2 pb-2 pl-2 text-xl italic font-semibold">
            TOÀN BỘ SẢN PHẨM
          </h1>
          {categories === "pc" && (
            <PcFilter products={products} setProductss={setFilteredProducts} />
          )}
          {categories === "laptop-gaming" && (
            <LaptopFilter
              products={products}
              setProductss={setFilteredProducts}
            />
          )}
          {categories === "laptop-vanphong" && (
            <LaptopFilter
              products={products}
              setProductss={setFilteredProducts}
            />
          )}
          {categories === "laptop" && (
            <LaptopFilter
              products={products}
              setProductss={setFilteredProducts}
            />
          )}
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-wrap gap-1">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${categories}/${product.id}`}
              >
                <ProductCarousel_Card product={product} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
