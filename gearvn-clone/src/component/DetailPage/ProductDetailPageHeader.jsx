import { useEffect, useState } from "react";
import GallaryCarousel from "./GallaryCarousel";

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
      <div className="w-3/5">
        <h1 className="text-2xl font-bold">{product.title}</h1>
      </div>
    </div>
  );
}
