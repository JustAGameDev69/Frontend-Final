import { useEffect, useState } from "react";

export default function AdsComponent({ leftImageUrl, rightImageUrl }) {
  const [top, setTop] = useState("top-44");
  const adStyle = `w-40 ${top} z-50 fixed rounded transition-all duration-300 ease-in-out`;

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const currentScroll = window.scrollY;

      const footerHeight = 325;

      if (documentHeight - (currentScroll + viewportHeight) < footerHeight) {
        setTop("top-32");
      } else {
        setTop("top-44");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <img
        className={`${adStyle} left-44`}
        src={leftImageUrl}
        alt="Quảng cáo trái"
      />
      <img
        className={`${adStyle} right-44`}
        src={rightImageUrl}
        alt="Quảng cáo phải"
      />
    </>
  );
}
