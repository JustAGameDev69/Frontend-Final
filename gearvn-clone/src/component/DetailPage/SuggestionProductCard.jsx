import ImageTag from "../Body/SliderSection/ImageTag";
import SvgReturn from "../SvgReturn";
import "../Body/SectionCollection/ProductCarousel/ProductCarousel_Card.css";

function calculateRoundedPercent(a, b) {
  const numberA = parseFloat(a.replace(/\./g, ""));
  const percent = numberA * (b / 100);
  const roundedPercent = Math.round(percent / 10000) * 10000;
  const number = numberA - roundedPercent;

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function SuggestionProductCard({ product }) {
  const { image_1 } = product.image;
  const { price, sale } = product;

  return (
    <div className="flex w-full items-center gap-2 h-auto mb-1 mt-1">
      <ImageTag
        containerStyle="w-32 h-32 bg-white w-1/3"
        imgStyle="w-full h-full object-contain"
      >
        {image_1}
      </ImageTag>
      <div className="product-carousel-card-content w-2/3">
        <p className="product-carousel-card-content-title">{product.title}</p>
        <p className="product-carousel-card-content-detail-base-price">
          {price}₫
        </p>
        <p className="product-carousel-card-content-detail-current-price">
          {product.sale
            ? calculateRoundedPercent(price, sale) + "₫"
            : `${price}₫`}
          {sale && <span>{`-${sale}%`}</span>}
        </p>
        <p className="product-carousel-card-content-detail-rating">
          0
          <SvgReturn name="rating" />
          <span>(0 đánh giá)</span>
        </p>
      </div>
    </div>
  );
}
