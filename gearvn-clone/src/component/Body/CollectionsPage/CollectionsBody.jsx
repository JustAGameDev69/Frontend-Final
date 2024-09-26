import { Link } from "react-router-dom";
import { useData } from "../../../context/dataContext";
import { Loading } from "../../Loading";
import { ProductCarousel_Card } from "../SectionCollection/ProductCarousel/ProductCarousel_Card";
import { useState } from "react";
import FilterComponent from "../../FilterComponent/FilterComponent";

export default function CollectionsBody({ products = [], categories = "" }) {
  const { isLoading } = useData();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterCategories = {
    laptop: ["CPU", "RAM", "VGA", "SSD", "refreshRate", "price"],
    pc: ["CPU", "RAM", "VGA", "SSD", "price"],
    "laptop-vanphong": ["CPU", "RAM", "VGA", "SSD", "monitor", "price"],
  };
  const currentFilters = filterCategories[categories] || [];

  console.log(filteredProducts);

  return (
    <div className="w-full">
      <div className="content-container bg-white mt-3 mb-3 pt-3 pb-2 rounded">
        <div className="border-b border-slate-800 mb-5">
          <h1 className="pt-2 pb-2 pl-2 text-xl italic font-semibold">
            TOÀN BỘ SẢN PHẨM
          </h1>
          <FilterComponent
            products={products}
            setProductss={setFilteredProducts}
            filters={currentFilters}
          />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-wrap gap-1">
            {filteredProducts[0] ? (
              filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${categories}/${product.id}`}
                >
                  <ProductCarousel_Card product={product} />
                </Link>
              ))
            ) : (
              <div>
                <img
                  className="mx-auto"
                  src="https://www.aggarwalplantation.com/images/product-not-found.png"
                />
                <h1 className="text-2xl font-semibold px-10 italic text-[#ff0000] my-5">
                  Rất tiếc, thời điểm hiện tại chúng tôi không có sản phẩm nào
                  thỏa mãn yêu cầu của bạn! Vui lòng thử các sản phẩm khác hoặc
                  liên hệ với chúng tôi qua các phương thức trực tuyến!
                </h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
