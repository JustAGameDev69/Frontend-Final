import ImageTag from "./ImageTag";

export default function SectionBannerRightCol() {
  return (
    <div className="w-1/3 flex flex-col gap-y-1">
      <ImageTag
        containerStyle="w-full h-40"
        imgStyle="w-full h-full object-fill"
      >
        {"https://file.hstatic.net/200000722513/file/artboard_12.png"}
      </ImageTag>
      <ImageTag
        containerStyle="w-full h-40"
        imgStyle="w-full h-full object-fill"
      >
        {"https://file.hstatic.net/200000722513/file/artboard_12_copy.png"}
      </ImageTag>
      <ImageTag
        containerStyle="w-full h-40"
        imgStyle="w-full h-full object-fill"
      >
        {"https://file.hstatic.net/200000722513/file/artboard_12_copy_2.png"}
      </ImageTag>
    </div>
  );
}
