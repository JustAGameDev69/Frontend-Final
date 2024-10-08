import SliderNavItems from "./SliderNavItems";
import SvgReturn from "../../SvgReturn";
import { Link } from "react-router-dom";

const contents = [
  { name: "Laptop", link: "laptop" },
  { name: "Laptop Gaming", link: "laptop-gaming" },
  { name: "PC GVN", link: "pc" },
  { name: "Main, CPU, VGA", link: "mainboard" },
  { name: "Case, Nguồn, Tản", link: "case" },
  { name: "Ổ cứng, Ram, Thẻ nhớ", link: "disk" },
  { name: "Loa, Micro, Webcam", link: "speaker" },
  { name: "Màn hình", link: "monitor" },
  { name: "Chuột + Lót chuột", link: "mouse" },
  { name: "Tai nghe", link: "headphone" },
  { name: "Ghế - Bàn", link: "chair" },
  { name: "Phần mềm, mạng", link: "officedevice" },
  { name: "Handheld, Console", link: "console" },
  { name: "Phụ kiện (Hub, sạc, cáp)", link: "accessory" },
  { name: "Thủ thuật - Giải đáp", link: "/no" },
];

export default function SliderSectionNav({ setCategories }) {
  return (
    <div className="w-1/5 bg-white rounded">
      {contents.map((content) => (
        <Link to={`collections/${content.link}`} key={content.name}>
          <SliderNavItems
            content={content.name}
            key={content.name}
            setCategories={setCategories}
          >
            <SvgReturn name={content.name} />
          </SliderNavItems>
        </Link>
      ))}
    </div>
  );
}
