import SectionBannerLeftCol from "./SectionBannerLeftCol";
import SectionBannerRightCol from "./SectionBannerRightCol";

export default function SliderSectionBanner() {
  return (
    <div className="w-4/5 flex gap-2.5 mt-2">
      <SectionBannerLeftCol />
      <SectionBannerRightCol />
    </div>
  );
}
