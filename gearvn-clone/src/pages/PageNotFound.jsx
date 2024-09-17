import Header from "../component/Header/Header";

import Footer from "../component/Footer/Footer";
import ImageTag from "../component/Body/SliderSection/ImageTag";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <Header />
      <div className="content-container bg-white rounded mt-3">
        <div className="w-full">
          <ImageTag imgStyle="w-96" containerStyle="w-96 ml-auto mr-auto">
            {
              "https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
            }
          </ImageTag>
          <h1 className="pt-2 pb-2 text-center">
            Trang bạn đang tìm không tồn tại, vui lòng quay trở lại
            <Link to="/">
              <span className="pageLink">TRANG CHỦ!</span>
            </Link>
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
