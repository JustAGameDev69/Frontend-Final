import CarouselBanner from "./CarouselBanner";
import ImageTag from "./ImageTag";

export default function SectionBannerLeftCol() {
  return (
    <div className="w-2/3">
      <CarouselBanner />
      <div className="w-full h-2/5 flex pt-2">
        <ImageTag
          containerStyle={"w-1/2 h-40"}
          imgStyle={"h-full w-full object-fill"}
          alt={"ad1"}
        >
          {"https://file.hstatic.net/200000722513/file/artboard_12_copy_4.png"}
        </ImageTag>
        <ImageTag
          containerStyle={"w-1/2 h-40"}
          imgStyle={"h-full w-full object-fill"}
          alt={"ad2"}
        >
          {"https://file.hstatic.net/200000722513/file/artboard_12_copy_3.png"}
        </ImageTag>
      </div>
    </div>
  );
}
