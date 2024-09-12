import { ProductCarousel_Header } from "./ProductCarousel/ProductCarousel_Header";
import ProductListCarousel from "./ProductListCarousel";

export default function SectionCollection({
  title = "Sản phẩm",
  subTitle = "Mua bán",
  categories = [],
  data = [],
  linkTo = "",
}) {
  return (
    <div className="w-full mt-3 mb-3">
      <div className="bg-white content-container rounded pb-3">
        <ProductCarousel_Header
          title={title}
          subTitle={subTitle}
          categories={categories}
          linkTo={linkTo}
        />
        <ProductListCarousel data={data} />
      </div>
    </div>
  );
}
