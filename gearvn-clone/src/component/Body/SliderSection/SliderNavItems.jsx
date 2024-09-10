export default function SliderNavItems({ children, content, setCategories }) {
  return (
    <div
      onMouseEnter={() => setCategories(content)}
      className="flex p-1 pl-2 items-center relative hover:bg-[#E30019] hover:text-white"
    >
      <span className="ml-1.5 w-5">{children}</span>
      <p className="ml-2 pr-2">{content}</p>
      <span className=" w-1.5 h-1.5 absolute top-3.5 right-2">
        <svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.5 1.5L4.5 4L1.5 6.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </span>
    </div>
  );
}
