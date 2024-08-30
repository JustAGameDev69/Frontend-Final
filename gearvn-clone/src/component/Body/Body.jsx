import SectionCollection from "./SectionCollection/SectionCollection";
import SliderSection from "./SliderSection/SliderSection";
import SubBanner from "./SubBanner/SubBanner";

export default function Body() {
  return (
    <div className="w-full">
      <SliderSection />
      <SubBanner />
      <SectionCollection />
    </div>
  );
}
