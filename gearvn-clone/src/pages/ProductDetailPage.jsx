import { useParams } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import { Loading } from "../component/Loading";
import { useData } from "../context/dataContext";
import { useEffect } from "react";
import ProductDetailPageHeader from "../component/DetailPage/ProductDetailPageHeader";

export default function ProductDetailPage() {
  const { type, id } = useParams();
  const { getProductDetail, product, isLoading } = useData();

  useEffect(
    function () {
      getProductDetail(type, id);
    },
    [id, type]
  );

  return (
    <>
      <Header />
      <div className="w-full mt-3 mb-3">
        <div className="content-container bg-white rounded">
          {isLoading ? (
            <Loading />
          ) : (
            <ProductDetailPageHeader product={product} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
