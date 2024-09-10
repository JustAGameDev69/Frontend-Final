import ImageTag from "../Body/SliderSection/ImageTag";

const imgStyle = "w-8";

export default function FooterCopyright() {
  return (
    <div className="pt-5 pb-5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <p>KẾT NỐI VỚI CHÚNG TÔI</p>
        <div className="flex gap-2">
          <span className={imgStyle}>
            <ImageTag>
              {
                "https://file.hstatic.net/200000636033/file/facebook_1_0e31d70174824ea184c759534430deec.png"
              }
            </ImageTag>
          </span>
          <span className={imgStyle}>
            <ImageTag>
              {
                "https://file.hstatic.net/200000722513/file/tiktok-logo_fe1e020f470a4d679064cec31bc676e4.png"
              }
            </ImageTag>
          </span>
          <span className={imgStyle}>
            <ImageTag>
              {
                "https://file.hstatic.net/200000636033/file/youtube_1_d8de1f41ca614424aca55aa0c2791684.png"
              }
            </ImageTag>
          </span>
          <span className={imgStyle}>
            <ImageTag>
              {
                "https://file.hstatic.net/200000722513/file/icon_zalo__1__f5d6f273786c4db4a3157f494019ab1e.png"
              }
            </ImageTag>
          </span>
          <span className={imgStyle}>
            <ImageTag>
              {
                "https://file.hstatic.net/200000636033/file/group_1_54d23abd89b74ead806840aa9458661d.png"
              }
            </ImageTag>
          </span>
        </div>
      </div>
      <div className="w-40">
        <ImageTag imgStyle="w-full object-contain">
          {
            "https://theme.hstatic.net/200000722513/1001090675/14/logo-bct.png?v=6086"
          }
        </ImageTag>
      </div>
    </div>
  );
}
