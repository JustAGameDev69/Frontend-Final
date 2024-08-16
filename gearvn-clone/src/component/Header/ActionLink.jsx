export default function ActionLink({
  children,
  content,
  textWidth,
  otherStyle = "",
}) {
  return (
    <div
      className={`flex text-sm items-center text-wrap hover:cursor-pointer ${otherStyle}`}
    >
      <span className="w-5 h-5 mr-2 ml-2">{children}</span>
      <p className={textWidth}>{content}</p>
    </div>
  );
}
