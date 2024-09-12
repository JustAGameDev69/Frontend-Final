import { useData } from "../../context/dataContext";
import SectionCategories from "./CategoriesSection/SectionCategories";
import SectionCollection from "./SectionCollection/SectionCollection";
import SliderSection from "./SliderSection/SliderSection";
import AdsSubBanner from "./SubBanner/AdsSubBanner";
import SubBanner from "./SubBanner/SubBanner";
import SubPage from "./SubPage";

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
  const {
    pc,
    gamingLaptop,
    officeLaptop,
    mouse,
    keyboard,
    monitor,
    saleNews,
    techNews,
  } = useData();

  return (
    <div className="w-full">
      <SliderSection />
      <SubBanner />
      <SectionCollection
        title="PC bán chạy"
        subTitle="Trả góp 0%"
        categories={pcCategories}
        data={pc}
        linkTo="pc"
      />
      <SectionCollection
        title="Laptop gaming bán chạy"
        subTitle="Miễn phí giao hàng"
        categories={laptopCategories}
        data={gamingLaptop}
        linkTo="laptop-gaming"
      />
      <SectionCollection
        title="Laptop văn phòng bán chạy"
        subTitle="Miễn phí giao hàng"
        categories={laptopCategories}
        data={officeLaptop}
        linkTo="laptop-vanphong"
      />
      <AdsSubBanner />
      <SectionCollection
        title="Chuột bán chạy"
        subTitle="Giao hàng toàn quốc"
        categories={mouseCategories}
        data={mouse}
        linkTo="mouse"
      />
      <SectionCollection
        title="Bàn phím bán chạy"
        subTitle="Giao hàng toàn quốc"
        categories={keyboardCategories}
        data={keyboard}
        linkTo="keyboard"
      />
      <SectionCollection
        title="Màn hình chính hãng"
        subTitle="Bảo hành 1 đổi 1"
        categories={keyboardCategories}
        data={monitor}
        linkTo="monitor"
      />
      <SectionCategories />
      <SubPage title={"Chuyên trang khuyến mãi"} contents={saleNews} />
      <SubPage title={"Tin tức công nghệ"} contents={techNews} />
    </div>
  );
}
