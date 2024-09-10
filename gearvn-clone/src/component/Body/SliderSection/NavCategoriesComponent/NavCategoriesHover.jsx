export default function LaptopCategories({ data }) {
  return (
    <>
      {data.map((item, index) => {
        const { title, contents } = item;

        return (
          <div key={index}>
            <h4 className="font-semibold text-[#E30019]">{title}</h4>
            {contents?.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
        );
      })}
    </>
  );
}
