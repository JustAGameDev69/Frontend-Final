import { useEffect, useState } from "react";
import GallaryCarousel from "./GallaryCarousel";
import SvgReturn from "../SvgReturn";
import "../Body/SectionCollection/ProductCarousel/ProductCarousel_Card.css";
import { useAccount } from "../../context/AccountContext";
import PleaseLoginModal from "../Cart/PleaseLoginModal";
import { Loading } from "../Loading";

function calculateRoundedPercent(a, b) {
  const numberA = parseFloat(a.replace(/\./g, ""));
  const percent = numberA * (b / 100);
  const roundedPercent = Math.round(percent / 10000) * 10000;
  const number = numberA - roundedPercent;

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function ProductDetailPageHeader({ product, type }) {
  const [open, handleOpen] = useState(false);
  const [images, setImage] = useState([]);
  const { account, updateUserCart, isLoading } = useAccount();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleAddToCart() {
    if (!account) handleOpen(true);
    if (account) {
      const updatedAccount = {
        ...account,
        cart: account.cart.find((item) => item.product_id === product.id)
          ? account.cart.map((item) =>
              item.product_id === product.id
                ? { ...item, product_quantity: item.product_quantity + 1 }
                : item
            )
          : [
              ...account.cart,
              {
                product_id: product.id,
                product_type: type,
                product_image: images[1].src,
                product_name: product.title,
                product_price: calculateRoundedPercent(
                  product.price,
                  product.sale
                ),
                product_quantity: 1,
                product_status: "waiting",
              },
            ],
      };

      updateUserCart(updatedAccount, account.id);
    }
  }

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
    <>
      <div className="flex pt-3 pb-10 gap-2 bg-white pr-3 pl-3">
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
            <div className="border rounded border-red-300 mb-3">
              <div className="flex gap-2 bg-[#FFD9D9] text-lg pl-4 pt-2 pb-2">
                <span>
                  <SvgReturn name="gift" />
                </span>
                Quà tặng khuyến mãi
              </div>
              <div className="flex gap-2 pl-5 pt-2 pb-2 items-center">
                <span className="text-[#fff] pr-2 pl-2 bg-[#E30019] rounded-full">
                  1
                </span>
                <p>
                  Tặng ngay{" "}
                  <span className="text-[#ff0000] font-semibold">1</span> x{" "}
                  <span className="text-[#ff0000] font-semibold">product</span>{" "}
                  trị giá{" "}
                  <span className="text-[#ff0000] font-semibold">price</span>
                </p>
              </div>
            </div>
            <div
              className="w-1/2 bg-[#E30019] text-white text-center py-2 rounded cursor-pointer mt-2 mb-2"
              onClick={() => handleAddToCart()}
            >
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  <p>MUA NGAY</p>
                  <p className="text-sm">Giao tận nơi hoặc nhận tại cửa hàng</p>
                </>
              )}
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
      <PleaseLoginModal
        open={open}
        handleOpen={handleOpen}
        content={"BẠN HÃY VUI LÒNG ĐĂNG NHẬP ĐỂ MUA HÀNG NHÉ!"}
      />
    </>
  );
}
