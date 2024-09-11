import ImageTag from "./SliderSection/ImageTag";

export default function SubPage({ title, contents }) {
  return (
    <div className="bg-white content-container rounded pb-2 border-b border-slate-800">
      <h2 className="pt-3 pb-3 text-xl pl-2">{title}</h2>
      <div className="flex w-full gap-2">
        {contents.map((content, id) => (
          <div key={id} className="w-1/4">
            {content.image && (
              <ImageTag
                containerStyle="rounded object-contain"
                imgStyle="rounded w-full h-36"
              >
                {content.image}
              </ImageTag>
            )}
            {content.title && <p className="pt-2 pb-2">{content.title}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
