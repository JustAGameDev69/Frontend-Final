import SectionCollection from "./SectionCollection/SectionCollection";
import SliderSection from "./SliderSection/SliderSection";
import SubBanner from "./SubBanner/SubBanner";

const pcCategories = [
  "PC I3",
  "PC I5",
  "PC I7",
  "PC I9",
  "PC R3",
  "PC R5",
  "PC R7",
  "PC R9",
];
const mouseCategories = [
  "Logitech",
  "Razer",
  "Asus",
  "Corsair",
  "Dare-U",
  "Rapoo",
];
const laptopCategories = ["ASUS", "ACER", "MSI", "LENOVO", "GIGABYTE", "DELL"];
const keyboardCategories = [
  "Akko",
  "Asus",
  "Razer",
  "Logitech",
  "Leopold",
  "Dare-U",
];

export default function Body() {
  return (
    <div className="w-full">
      <SliderSection />
      <SubBanner />
      <SectionCollection
        title="PC bán chạy"
        subTitle="Trả góp 0%"
        categories={pcCategories}
      />
      <SectionCollection
        title="Laptop Gaming bán chạy"
        subTitle="Miễn phí giao hàng"
        categories={laptopCategories}
      />
      <SectionCollection
        title="Laptop văn phòng bán chạy"
        subTitle="Miễn phí giao hàng"
        categories={laptopCategories}
      />
      <SectionCollection
        title="Chuột bán chạy"
        subTitle="Giao hàng toàn quốc"
        categories={mouseCategories}
      />
      <SectionCollection
        title="Bàn phím bán chạy"
        subTitle="Giao hàng toàn quốc"
        categories={keyboardCategories}
      />
    </div>
  );
}
