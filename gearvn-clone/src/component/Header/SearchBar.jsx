import { useState } from "react";
import { useData } from "../../context/DataContext";
import { Link } from "react-router-dom";
export default function SearchBar() {
  const { allProduct } = useData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    if (query.trim()) {
      const results = allProduct
        .filter((product) => product.title.toLowerCase().includes(query))
        .slice(0, 4);
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="w-5/12 px-1">
      <div className="relative">
        <input
          type="text"
          className="text-[#212529] w-full text-base h-10 shadow p-4 rounded outline-none focus:outline-none"
          placeholder="Bạn cần tìm gì?"
          value={searchTerm}
          onChange={handleSearch}
          autoComplete="off"
        />
        <button>
          <svg
            className="text-teal-400 h-4 w-4 absolute top-3 right-3 fill-[#212529] dark:text-teal-300 "
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: "new 0 0 56.966 56.966" }}
            xmlSpace="preserve"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
        {filteredProducts.length > 0 && (
          <div className="w-full absolute mt-1 border rounded bg-white shadow-md z-50">
            {filteredProducts.map((product) => (
              <div key={product.id} className="p-2 hover:bg-gray-100 w-full">
                <Link to={`product/${product.categories}/${product.id}`}>
                  <div className="flex w-full gap-1">
                    <div className="w-1/5">
                      <img className="w-16 h-16" src={product.image.image_1} />
                    </div>
                    <div className="w-4/5">
                      <p className="text-[#212529] text-sm whitespace-break-spaces">
                        {product.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
