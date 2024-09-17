import { useParams } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import { Loading } from "../component/Loading";
import { useData } from "../context/dataContext";
import { useEffect } from "react";
import ProductDetailPageHeader from "../component/DetailPage/ProductDetailPageHeader";
import ProductDetailPageBody from "../component/DetailPage/ProductDetailPageBody";
import ProductDetailPageRating from "../component/DetailPage/ProductDetailPageRating";

export default function ProductDetailPage() {
  const { type, id } = useParams();
  const {
    getProductDetail,
    product,
    suggestProducts,
    isLoading,
    getSuggestionProduct,
    techNews,
  } = useData();

  useEffect(
    function () {
      getProductDetail(type, id);
      getSuggestionProduct(type, 3, id);
    },
    [id, type]
  );

  return (
    <>
      <Header />
      <div className="w-full mt-3 mb-3">
        <div className="content-container rounded">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <ProductDetailPageHeader product={product} />
              <ProductDetailPageBody
                descImage={product.desc_image}
                detail={product.detail}
                name={product.title}
                suggestProducts={suggestProducts}
                link={type}
                techNews={techNews}
              />
              <ProductDetailPageRating />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
