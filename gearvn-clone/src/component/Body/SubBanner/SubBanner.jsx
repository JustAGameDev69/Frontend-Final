import ImageTag from "../SliderSection/ImageTag";

export default function SubBanner() {
  const containerStyle = "w-1/4";
  const imageStyle = "w-full h-full";

  return (
    <div className="content-container w-full flex gap-3 mt-3 pl-0 pr-0">
      <ImageTag containerStyle={containerStyle} imgStyle={imageStyle}>
        {"https://file.hstatic.net/200000722513/file/artboard_12_copy_12.png"}
      </ImageTag>
      <ImageTag containerStyle={containerStyle} imgStyle={imageStyle}>
        {"https://file.hstatic.net/200000722513/file/artboard_12_copy_11.png"}
      </ImageTag>
      <ImageTag containerStyle={containerStyle} imgStyle={imageStyle}>
        {"https://file.hstatic.net/200000722513/file/artboard_12_copy_10.png"}
      </ImageTag>
      <ImageTag containerStyle={containerStyle} imgStyle={imageStyle}>
        {"https://file.hstatic.net/200000722513/file/artboard_12_copy_9.png"}
      </ImageTag>
    </div>
  );
}
