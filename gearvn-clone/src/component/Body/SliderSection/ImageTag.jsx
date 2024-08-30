export default function ImageTag({
  children = "",
  containerStyle = "w-full h-full",
  imgStyle = "w-ful h-full",
  alt = "an image",
}) {
  return (
    <div className={containerStyle}>
      <img className={imgStyle} src={children} alt={alt} />
    </div>
  );
}
