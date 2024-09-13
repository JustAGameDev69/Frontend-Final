import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

export default function GallaryCarousel({ images }) {
  return (
    <Carousel
      hasIndexBoard={false}
      hasSizeButton={false}
      hasMediaButton={false}
      thumbnailHeight="20%"
      thumbnailWidth="18%"
      images={images}
      style={{
        height: 400,
        width: "100%",
        objectFit: "contain",
        backgroundColor: "#fff",
      }}
    />
  );
}
