import Header from "../component/Header/Header";
import Body from "../component/Body/Body";
import Footer from "../component/Footer/Footer";
import AdsComponent from "../component/Body/AdsComponent";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AdsComponent
        leftImageUrl="https://file.hstatic.net/200000722513/file/side_web_pc_gearvn_tra_gop_0_.png"
        rightImageUrl="https://file.hstatic.net/200000722513/file/banner_side_web_laptop_gaming.jpg"
      />
      <Header />
      <Body />
      <Footer />
    </>
  );
}
