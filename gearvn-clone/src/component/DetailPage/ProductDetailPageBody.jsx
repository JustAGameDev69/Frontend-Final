import { Link } from "react-router-dom";
import ImageTag from "../Body/SliderSection/ImageTag";
import SuggestionProductCard from "./SuggestionProductCard";

const thStyle = "border border-slate-600 pl-1 pr-1 pt-2 pb-2 text-lg";
const tdStyle = "border border-slate-600 pl-2 pr-1 pt-3 pb-3";

export default function ProductDetailPageBody({
  descImage = "",
  detail,
  name = "",
  suggestProducts,
  link = "",
  techNews,
}) {
  console.log(suggestProducts);

  return (
    <div className="flex gap-4 w-full mt-3">
      <div className="w-3/5 bg-white pl-3 pr-3 rounded pb-3">
        <h1 className="text-2xl font-medium pt-2 pb-2">Thông tin sản phẩm</h1>
        {descImage && (
          <ImageTag containerStyle="h-auto pt-2 pb-2 mb-4">
            {descImage}
          </ImageTag>
        )}
        {detail ? (
          <>
            <h1 className="text-xl pb-3 pt-3 font-semibold text-[#ff0000]">
              CẤU HÌNH CHI TIẾT SẢN PHẨM {name.toLocaleUpperCase()}
            </h1>
            <table className="w-full border border-slate-500 border-collapse">
              <thead>
                <tr>
                  <th className={thStyle + "pr-2 pl-2"}>Thành phần</th>
                  <th className={thStyle}>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(detail).map(([key, value]) => (
                  <tr key={key}>
                    <td className={`${tdStyle} text-[#428bca] font-semibold`}>
                      {key.toLocaleUpperCase()}
                    </td>
                    <td className={tdStyle}>{value || "N/A"}</td>{" "}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <h1 className="text-xl font-semibold text-[#ff0000]">
            SẢN PHẨM HIỆN TẠI CHƯA CÓ THÔNG TIN. VUI LÒNG LIÊN HỆ QUA ZALO HOẶC
            SĐT ĐỂ BIẾT THÊM CHI TIẾT. XIN CẢM ƠN!
          </h1>
        )}
      </div>
      <div className="w-2/5">
        {suggestProducts && (
          <div className="pl-3 pr-3 pt-3 bg-white rounded pb-3">
            <h1 className="text-xl font-medium">Sản phẩm tương tự</h1>
            {suggestProducts.map((product) => (
              <Link to={`/product/${link}/${product.id}`} key={product.id}>
                <SuggestionProductCard product={product} />
              </Link>
            ))}
          </div>
        )}
        <div className="pl-3 pr-3 pt-3 bg-white rounded pb-3 mt-3">
          <h1 className="text-xl font-medium">Tin tức công nghệ</h1>
          {techNews && <div className="flex">{}</div>}
        </div>
      </div>
    </div>
  );
}
