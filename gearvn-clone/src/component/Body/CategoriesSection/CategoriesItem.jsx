import ImageTag from "../SliderSection/ImageTag";

export default function CategoriesItem({ item }) {
  const { name, link, image } = item;

  return (
    <div className="w-28 text-center">
      <ImageTag
        containerStyle="w-9/12 h-2/3 ml-auto mr-auto"
        imgStyle="object-contain h-full w-full"
      >
        {image}
      </ImageTag>
      <p className="mr-auto ml-auto">{name}</p>
    </div>
  );
}
