import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

export default function GallaryCarousel({ images }) {
  return (
    <Carousel
      objectFit="contain"
      hasIndexBoard={false}
      hasSizeButton={false}
      hasMediaButton={false}
      thumbnailHeight="20%"
      thumbnailWidth="18%"
      images={images}
      className="object-contain"
      style={{
        height: 400,
        width: "100%",
        backgroundColor: "#fff",
      }}
    />
  );
}
