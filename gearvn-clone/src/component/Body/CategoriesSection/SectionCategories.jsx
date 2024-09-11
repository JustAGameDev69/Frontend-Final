import CategoriesItem from "./CategoriesItem";

const items = [
  {
    name: "Laptop",
    link: "laptop",
    image:
      "https://file.hstatic.net/200000636033/file/icon1_ce115f32db874a8e9b5af39517176e96.png",
  },
  {
    name: "PC",
    link: "pc",
    image:
      "https://file.hstatic.net/200000636033/file/icon3_5c59c1dc52ec4b81a94a3edba293e895.png",
  },
  {
    name: "Màn hình",
    link: "monitor",
    image:
      "https://product.hstatic.net/200000722513/product/asus_pg27aqdm_gearvn_53c46bd0ca1f40f1a7abfb0246800081_e341bb95b0724bee845ba8f093678245_master.jpg",
  },
  {
    name: "Mainboard",
    link: "mainboard",
    image:
      "https://file.hstatic.net/200000636033/file/icon5_71200675c9e64c32a11730486ba04b32.png",
  },
  {
    name: "CPU",
    link: "cpu",
    image:
      "https://file.hstatic.net/200000636033/file/icon6_056974287cd84e0d82eac05809b7e5d5.png",
  },
  {
    name: "VGA",
    link: "vga",
    image:
      "https://file.hstatic.net/200000722513/file/asus-rog-strix-rtx4090-o24g-gaming-03_c948a4c2a9cf4adcbd522319bfcd4846.jpg",
  },
  {
    name: "RAM",
    link: "ram",
    image:
      "https://file.hstatic.net/200000636033/file/icon13_708c31c3ba56430dbec3f4cc7e1b14f0.png",
  },
  {
    name: "Ổ cứng",
    link: "disk",
    image:
      "https://file.hstatic.net/200000636033/file/icon11_2f0ea4c77ae3482f906591cec8f24cea.png",
  },
  {
    name: "Case",
    link: "case",
    image:
      "https://file.hstatic.net/200000636033/file/icon7_cdd85eba03974cb99a3941d076bf5d1b.png",
  },
  {
    name: "Tản nhiệt",
    link: "coolingfan",
    image:
      "https://file.hstatic.net/200000636033/file/icon8_8f7b3fe2e8fb450b805857be9bb14edc.png",
  },
  {
    name: "Nguồn",
    link: "psu",
    image:
      "https://file.hstatic.net/200000636033/file/icon9_ffd172460eb24c4d8bab6a7cd9a8cc46.png",
  },
  {
    name: "Bàn phím",
    link: "keyboard",
    image:
      "https://file.hstatic.net/200000722513/file/ban_phim_93a4d3cefd8345dfac23829818a3c5d4.jpg",
  },
  {
    name: "Chuột",
    link: "mouse",
    image:
      "https://file.hstatic.net/200000722513/file/chuot_aa348bf0177b4795a39ab66d51e62ed7.jpg",
  },
  {
    name: "Ghế",
    link: "chair",
    image:
      "https://file.hstatic.net/200000722513/file/ghe_e1ff4e3493f14aa982676b3c4574135e.jpg",
  },
  {
    name: "Tai nghe",
    link: "headphone",
    image:
      "https://file.hstatic.net/200000722513/file/tai_nghe_ed3b4f52172f40929e1d3ab493099b73.jpg",
  },
  {
    name: "Loa",
    link: "speaker",
    image:
      "https://file.hstatic.net/200000636033/file/icon10_bfdf42150dbf45cfbcdf990b26f59691.png",
  },
  {
    name: "Console",
    link: "console",
    image:
      "https://file.hstatic.net/200000636033/file/icon18_720958e90b7d4fa7ae803f8f4d2fe56b.png",
  },
  {
    name: "Phụ kiện",
    link: "accessory",
    image:
      "https://file.hstatic.net/200000636033/file/icon19_0197366bbf124fed9b939c9b7075c2db.png",
  },
  {
    name: "Thiết bị VP",
    link: "officedevice",
    image:
      "https://file.hstatic.net/200000636033/file/icon20_d17b4a1a0d884dc49a1212256531c3f2.png",
  },
  {
    name: "Apple",
    link: "apple",
    image:
      "https://file.hstatic.net/200000636033/file/icon2_0ebe9b62122949ec8005dd19d110c1ba.png",
  },
];

export default function SectionCategories() {
  return (
    <div className="content-container bg-white rounded mb-3">
      <div className="w-full border-b border-slate-800">
        <h4 className="pl-3 pt-2 pb-2" style={{ fontSize: "22px" }}>
          Danh mục sản phẩm
        </h4>
      </div>
      <div className="w-full flex flex-wrap pt-2">
        {items.map((item) => (
          <CategoriesItem item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}
