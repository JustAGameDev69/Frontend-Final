import { Carousel } from "@material-tailwind/react";

export default function CarouselBanner() {
  return (
    <div className="w-full h-80">
      <Carousel
        autoplay={true}
        autoplayDelay={4000}
        loop={true}
        className="rounded"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://file.hstatic.net/200000722513/file/web_slider_800x400_laptop_gaming.png"
          alt="image 1"
          className="h-full w-full object-fill"
        />
        <img
          src="https://file.hstatic.net/200000722513/file/gearvn_800x400_asus_vivobook_gaming.jpg"
          alt="image 2"
          className="h-full w-full object-fill"
        />
        <img
          src="https://file.hstatic.net/200000722513/file/web_slider_800x400_man_hinh.png"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="https://file.hstatic.net/200000722513/file/gear_thumb_web_5ab605acf5ac4a3ea7a7adc276bf063b.png"
          alt="image 4"
          className="h-full w-full object-fill"
        />
      </Carousel>
    </div>
  );
}
