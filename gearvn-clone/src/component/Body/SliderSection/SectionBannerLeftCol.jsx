import CarouselBanner from "./CarouselBanner";

export default function SectionBannerLeftCol() {
  return (
    <div className="w-2/3">
      <CarouselBanner />
      <div className="w-full h-1/3 flex pt-2">
        <div className="w-1/2 h-full">
          <img
            className="h-full w-full object-fill"
            src="https://file.hstatic.net/200000722513/file/artboard_12_copy_4.png"
            alt="ad1"
          />
        </div>
        <div className="w-1/2 h-full">
          <img
            className="h-full w-full object-fill"
            src="https://file.hstatic.net/200000722513/file/artboard_12_copy_3.png"
            alt="ad2"
          />
        </div>
      </div>
    </div>
  );
}
