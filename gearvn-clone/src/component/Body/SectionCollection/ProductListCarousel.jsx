import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductListStyle.css";
import { ProductCarousel_Card } from "./ProductCarousel/ProductCarousel_Card";

export default function ProductListCarousel() {
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

  const data = [
    {
      image:
        "https://product.hstatic.net/200000722513/product/pc_gvn_i3_1650_-_25_49bfa7eacaf842b5b2569b0d041c2b23_medium.jpg",
      name: "PC GVN Intel i3-12100F/ VGA GTX 1650",
      detail: {
        CPU: "I3 12100F",
        GPU: "GTX 1650",
        mainboard: "H610",
        ram: "8GB",
        disk: "250GB",
      },
      price: 11590000,
      currentSale: "7%",
      rating: 0,
      reviews: 0,
    },
    {
      image:
        "https://product.hstatic.net/200000722513/product/pc_gvn_i3_1650_-_25_49bfa7eacaf842b5b2569b0d041c2b23_medium.jpg",
      name: "PC GVN Intel i3-12100F/ VGA GTX 1650",
      detail: {
        CPU: "I3 12100F",
        GPU: "GTX 1650",
        mainboard: "H610",
        ram: "8GB",
        disk: "250GB",
      },
      price: 11590000,
      currentSale: "7%",
      rating: 0,
      reviews: 0,
    },
    {
      image:
        "https://product.hstatic.net/200000722513/product/pc_gvn_i3_1650_-_25_49bfa7eacaf842b5b2569b0d041c2b23_medium.jpg",
      name: "PC GVN Intel i3-12100F/ VGA GTX 1650",
      detail: {
        CPU: "I3 12100F",
        GPU: "GTX 1650",
        mainboard: "H610",
        ram: "8GB",
        disk: "250GB",
      },
      price: 11590000,
      currentSale: "7%",
      rating: 0,
      reviews: 0,
    },
    {
      image:
        "https://product.hstatic.net/200000722513/product/pc_gvn_i3_1650_-_25_49bfa7eacaf842b5b2569b0d041c2b23_medium.jpg",
      name: "PC GVN Intel i3-12100F/ VGA GTX 1650",
      detail: {
        CPU: "I3 12100F",
        GPU: "GTX 1650",
        mainboard: "H610",
        ram: "8GB",
        disk: "250GB",
      },
      price: 11590000,
      currentSale: "7%",
      rating: 0,
      reviews: 0,
    },
    {
      image:
        "https://product.hstatic.net/200000722513/product/pc_gvn_i3_1650_-_25_49bfa7eacaf842b5b2569b0d041c2b23_medium.jpg",
      name: "PC GVN Intel i3-12100F/ VGA GTX 1650",
      detail: {
        CPU: "I3 12100F",
        GPU: "GTX 1650",
        mainboard: "H610",
        ram: "8GB",
        disk: "250GB",
      },
      price: 11590000,
      currentSale: "7%",
      rating: 0,
      reviews: 0,
    },
  ];

  return (
    <div className="bg-white">
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {data.map((product) => (
          <ProductCarousel_Card product={product} key={product.name} />
        ))}
      </Carousel>
    </div>
  );
}
