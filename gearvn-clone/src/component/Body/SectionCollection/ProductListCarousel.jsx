import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductListStyle.css";
import { ProductCarousel_Card } from "./ProductCarousel/ProductCarousel_Card";
import { Link } from "react-router-dom";

export default function ProductListCarousel({ data, categories }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-white">
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {data.map((product) => (
          <Link key={product.id} to={`/product/${categories}/${product.id}`}>
            <ProductCarousel_Card product={product} />
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
