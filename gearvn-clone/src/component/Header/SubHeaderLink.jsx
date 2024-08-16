export default function SubHeaderLink({ children, divided }) {
  return (
    <div className="flex items-center gap-2">
      {divided ? <span className="w-px h-5 bg-[#212529] mr-5"></span> : ""}
      {children}
    </div>
  );
}
