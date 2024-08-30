import SliderSectionBanner from "./SliderSectionBanner";
import SliderSectionNav from "./SliderSectionNav";

export default function SliderSection() {
  return (
    <div className="w-full mt-5">
      <div className="content-container flex w-full gap-2 h-fit">
        <SliderSectionNav />
        <SliderSectionBanner />
      </div>
    </div>
  );
}
