import { useState } from "react";
import SliderSectionBanner from "./SliderSectionBanner";
import SliderSectionNav from "./SliderSectionNav";
import NavCategories from "./NavCategories";

export default function SliderSection() {
  const [categories, setCategories] = useState();

  console.log(categories);

  return (
    <div className="w-full mt-5 pl-0 pr-0">
      <div
        onMouseLeave={() => setCategories("")}
        className="content-container flex w-full gap-2 h-fit pl-0 pr-0"
      >
        <SliderSectionNav setCategories={setCategories} />
        {!categories && <SliderSectionBanner />}
        {categories && <NavCategories categories={categories} />}
      </div>
    </div>
  );
}
