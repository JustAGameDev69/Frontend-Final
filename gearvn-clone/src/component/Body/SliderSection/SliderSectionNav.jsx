import SliderNavItems from "./SliderNavItems";
import SvgReturn from "../../SvgReturn";
import { Link } from "react-router-dom";

const contents = [
  { name: "Laptop", link: "laptop" },
  { name: "Laptop Gaming", link: "laptop-gaming" },
  { name: "PC GVN", link: "pc" },
  { name: "Main, CPU, VGA", link: "laptop-gaming" },
  { name: "Case, Nguồn, Tản", link: "laptop-gaming" },
  { name: "Ổ cứng, Ram, Thẻ nhớ", link: "laptop-gaming" },
  { name: "Loa, Micro, Webcam", link: "laptop-gaming" },
  { name: "Màn hình", link: "monitor" },
  { name: "Chuột + Lót chuột", link: "mouse" },
  { name: "Tai nghe", link: "headphone" },
  { name: "Ghế - Bàn", link: "laptop-gaming" },
  { name: "Phần mềm, mạng", link: "laptop-gaming" },
  { name: "Handheld, Console", link: "laptop-gaming" },
  { name: "Phụ kiện (Hub, sạc, cáp)", link: "laptop-gaming" },
  { name: "Thủ thuật - Giải đáp", link: "laptop-gaming" },
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
