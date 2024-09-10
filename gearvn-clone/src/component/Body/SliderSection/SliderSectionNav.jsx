import SliderNavItems from "./SliderNavItems";
import SvgReturn from "../../SvgReturn";

const contents = [
  "Laptop",
  "Laptop Gaming",
  "PC GVN",
  "Main, CPU, VGA",
  "Case, Nguồn, Tản",
  "Ổ cứng, Ram, Thẻ nhớ",
  "Loa, Micro, Webcam",
  "Màn hình",
  "Bàn phím",
  "Chuột + Lót chuột",
  "Tai nghe",
  "Ghế - Bàn",
  "Phần mềm, mạng",
  "Handheld, Console",
  "Phụ kiện (Hub, sạc, cáp)",
  "Thủ thuật - Giải đáp",
];

export default function SliderSectionNav({ setCategories }) {
  return (
    <div className="w-1/5 bg-white rounded">
      {contents.map((content) => (
        <SliderNavItems
          content={content}
          key={content}
          setCategories={setCategories}
        >
          <SvgReturn name={content} />
        </SliderNavItems>
      ))}
    </div>
  );
}
