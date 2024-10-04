import { useEffect, useState } from "react";

export default function AdsComponent({ leftImageUrl, rightImageUrl }) {
  const [top, setTop] = useState("top-44");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const adStyle = `${
    windowWidth > 1600 ? "w-40" : "w-32"
  } ${top} z-50 fixed rounded transition-all duration-300 ease-in-out`;

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const currentScroll = window.scrollY;

      const footerHeight = 325;

      if (documentHeight - (currentScroll + viewportHeight) < footerHeight) {
        if (windowWidth > 1600) {
          setTop("top-24");
        } else if (windowWidth < 1600) {
          setTop("top-6");
        }
      } else {
        setTop("top-44");
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("Window width:", window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <img
        className={`${adStyle} ${windowWidth > 1670 ? "left-44" : "left-10"}`}
        src={leftImageUrl}
        alt="Quảng cáo trái"
      />
      <img
        className={`${adStyle} ${windowWidth > 1670 ? "right-44" : "right-10"}`}
        src={rightImageUrl}
        alt="Quảng cáo phải"
      />
    </>
  );
}
