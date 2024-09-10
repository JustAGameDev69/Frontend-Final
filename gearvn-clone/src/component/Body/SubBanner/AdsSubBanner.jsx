import ImageTag from "../SliderSection/ImageTag";

export default function AdsSubBanner() {
  return (
    <div className="content-container w-full flex gap-3 mt-3 p-0">
      <ImageTag className="w-3/6" imgStyle="rounded">
        {
          "https://file.hstatic.net/200000722513/file/banner_man-hinh_1580x510_bot_promotion_banner_big.png"
        }
      </ImageTag>
      <div className="flex flex-col w-3/6 gap-2">
        <ImageTag imgStyle="rounded">
          {
            "https://file.hstatic.net/200000722513/file/banner_790x250_tai_nghe_6f6dcb17d3a54fcc88b3de96762d2d41.jpg"
          }
        </ImageTag>
        <ImageTag imgStyle="rounded">
          {
            "https://file.hstatic.net/200000722513/file/bot_promotion_banner_small_2_2ad55c2345c64fbfb87dab4957b33914.png"
          }
        </ImageTag>
      </div>
    </div>
  );
}
