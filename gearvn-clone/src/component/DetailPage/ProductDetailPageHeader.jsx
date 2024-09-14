import { useEffect, useState } from "react";
import GallaryCarousel from "./GallaryCarousel";
import "../Body/SectionCollection/ProductCarousel/ProductCarousel_Card.css";

function calculateRoundedPercent(a, b) {
  const numberA = parseFloat(a.replace(/\./g, ""));
  const percent = numberA * (b / 100);
  const roundedPercent = Math.round(percent / 10000) * 10000;
  const number = numberA - roundedPercent;

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function ProductDetailPageHeader({ product }) {
  const [images, setImage] = useState([]);

  useEffect(() => {
    if (product.image) {
      const { image_2, image_3, image_4, image_5, image_6 } = product.image;

      const checkImages = [image_2, image_3, image_4, image_5, image_6];

      const checkImageArray = checkImages.filter(
        (image) => image !== undefined
      );

      const images = checkImageArray.map((image) => {
        if (image) {
          return {
            src: image,
            sizes:
              "(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",
          };
        }
      });

      setImage(images);
    }
  }, [product.image]);

  return (
    <div className="flex pt-3 gap-2">
      <div className="w-2/5">
        {images && <GallaryCarousel images={images} />}
      </div>
      <div className="w-3/5 pl-2">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="border-b border-slate-800">
          <div className="flex gap-4 items-center pt-4 pb-4">
            <h2 className="product-carousel-card-content-detail-current-price text-3xl">
              {product.sale
                ? calculateRoundedPercent(product.price, product.sale) + "₫"
                : `${product.price}₫`}
            </h2>
            {product.sale && (
              <h2 className="product-carousel-card-content-detail-base-price text-xl">
                {product.price}₫
              </h2>
            )}
            <p className="product-carousel-card-content-detail-current-price">
              {product.sale && <span>{`-${product.sale}%`}</span>}
            </p>
          </div>
          <div className="w-1/2 bg-[#E30019] text-white text-center py-2 rounded cursor-pointer mt-2 mb-2">
            <p>MUA NGAY</p>
            <p className="text-sm">Giao tận nơi hoặc nhận tại cửa hàng</p>
          </div>
          <h2 className="text-[#ff0000] pt-2 pb-2 text-xl font-semibold">
            ƯU ĐÃI KHI MUA KÈM PC
          </h2>
          <p className="pt-2 pb-2 text-[#428bca] text-lg font-semibold cursor-pointer">
            ⭐ Ưu đãi lên đến 54% khi mua kèm PC{" "}
            <span className="font-normal">xem ngay tại đây</span>
          </p>
        </div>
        <div className="mt-2 text-xl text-[#ff0000] font-semibold">
          <h2>Hỗ trợ trả góp MPOS (Thẻ tín dụng), HDSAISON.</h2>
          <p className="italic text-black text-base">
            (Hình ảnh PC chỉ mang tính chất minh họa).
          </p>
        </div>
      </div>
    </div>
  );
}
