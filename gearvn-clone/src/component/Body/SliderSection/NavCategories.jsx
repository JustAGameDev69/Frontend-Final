import NavCategoriesHover from "./NavCategoriesComponent/NavCategoriesHover";
import CategoriesData from "./NavCategoriesComponent/navCategories.json";

export default function NavCategories({ categories }) {
  const {
    MainCPUVGA,
    PCGVN,
    accessory,
    casePsuCooling,
    chair,
    diskRam,
    handheldConsole,
    headphone,
    keyBoard,
    laptop,
    laptopGaming,
    monitor,
    mouse,
    softwareInternet,
    speakerMicroWebcam,
    trick,
  } = CategoriesData;

  return (
    <div className="w-4/5 bg-white rounded flex flex-wrap pl-3 pr-3 gap-16 pt-3 pb-3">
      {categories === "Laptop" && <NavCategoriesHover data={laptop} />}
      {categories === "Laptop Gaming" && (
        <NavCategoriesHover data={laptopGaming} />
      )}
      {categories === "PC GVN" && <NavCategoriesHover data={PCGVN} />}
      {categories === "Main, CPU, VGA" && (
        <NavCategoriesHover data={MainCPUVGA} />
      )}
      {categories === "Case, Nguồn, Tản" && (
        <NavCategoriesHover data={casePsuCooling} />
      )}
      {categories === "Ổ cứng, Ram, Thẻ nhớ" && (
        <NavCategoriesHover data={diskRam} />
      )}
      {categories === "Loa, Micro, Webcam" && (
        <NavCategoriesHover data={speakerMicroWebcam} />
      )}
      {categories === "Màn hình" && <NavCategoriesHover data={monitor} />}
      {categories === "Bàn phím" && <NavCategoriesHover data={keyBoard} />}
      {categories === "Chuột + Lót chuột" && (
        <NavCategoriesHover data={mouse} />
      )}
      {categories === "Tai nghe" && <NavCategoriesHover data={headphone} />}
      {categories === "Ghế - Bàn" && <NavCategoriesHover data={chair} />}
      {categories === "Phần mềm, mạng" && (
        <NavCategoriesHover data={softwareInternet} />
      )}
      {categories === "Handheld, Console" && (
        <NavCategoriesHover data={handheldConsole} />
      )}
      {categories === "Phụ kiện (Hub, sạc, cáp)" && (
        <NavCategoriesHover data={accessory} />
      )}
      {categories === "Thủ thuật - Giải đáp" && (
        <NavCategoriesHover data={trick} />
      )}
    </div>
  );
}
