import { useData } from "../../context/DataContext";
import { categories } from "../Body/categories.json";
import { Loading } from "../Loading";
import ImageTag from "../Body/SliderSection/ImageTag";
import { useEffect, useState } from "react";
import ProductListAdmin from "./ProductListAdmin";

export default function ProductSectionAdmin() {
  const [selectedCategories, setSelectedCategories] = useState("");
  const { getData, collections, isLoading } = useData();

  useEffect(() => {
    if (selectedCategories !== "") {
      getData(selectedCategories);
    }
  }, [selectedCategories]);

  return (
    <div className="bg-white rounded w-3/4 mt-5 mb-5 ml-96 pt-5 pb-5 px-10">
      {isLoading ? (
        <Loading className="mt-96 mb-96" />
      ) : selectedCategories ? (
        <ProductListAdmin
          data={collections}
          setSelectedCategories={setSelectedCategories}
          selectedCategories={selectedCategories}
        />
      ) : (
        <div className="flex flex-wrap gap-4">
          {categories.map((item, index) => (
            <div
              key={index}
              className="w-80 flex items-center border rounded gap-2 pl-2 hover:cursor-pointer"
              onClick={() => setSelectedCategories(item.link)}
            >
              {item.image && (
                <ImageTag
                  containerStyle="rounded"
                  imgStyle="w-40 h-40 object-contain"
                >
                  {item.image}
                </ImageTag>
              )}
              {item.name && <p className="pt-2 pb-2 text-lg">{item.name}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
