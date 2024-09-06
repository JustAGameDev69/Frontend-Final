import { useData } from "../../context/dataContext";
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
  const { data } = useData();
  const { pc, laptop, mouse, keyboard } = data;
  console.log(pc);

  return (
    <div className="w-full">
      <SliderSection />
      <SubBanner />
      <SectionCollection
        title="PC bán chạy"
        subTitle="Trả góp 0%"
        categories={pcCategories}
        data={pc}
      />
    </div>
  );
}
