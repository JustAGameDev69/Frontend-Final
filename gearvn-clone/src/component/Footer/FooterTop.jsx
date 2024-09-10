import ImageTag from "../Body/SliderSection/ImageTag";

export default function FooterTop() {
  const titleStyle = "font-semibold pt-2 pb-2";
  const textStyle = "pt-1 pb-1";
  const contactInfor = "font-bold text-blue-500";

  return (
    <div className="flex justify-between pt-5 pb-8 text-sm tracking-wide border-b border-slate-800">
      <div>
        <h4 className={titleStyle}>VỀ GEARVN</h4>
        <p className={textStyle}>Giới thiệu</p>
        <p className={textStyle}>Tuyển dụng</p>
      </div>
      <div>
        <h4 className={titleStyle}>CHÍNH SÁCH</h4>
        <p className={textStyle}>Chính sách bảo hành</p>
        <p className={textStyle}>Chính sách thanh toán</p>
        <p className={textStyle}>Chính sách giao hàng</p>
        <p className={textStyle}>Chính sách bảo mật</p>
      </div>
      <div>
        <h4 className={titleStyle}>THÔNG TIN</h4>
        <p className={textStyle}>Hệ thống cửa hàng</p>
        <p className={textStyle}>Hướng dẫn mua hàng</p>
        <p className={textStyle}>Tra cứu địa chỉ bảo hành</p>
      </div>
      <div>
        <h4 className={titleStyle}>
          TỔNG ĐÀI HỖ TRỢ <span className="font-normal">(8:00 - 21:00)</span>
        </h4>
        <p className={textStyle}>
          Mua hàng: <span className={contactInfor}>1900.5301</span>
        </p>
        <p className={textStyle}>
          Bảo hành: <span className={contactInfor}>1900.5325</span>
        </p>
        <p className={textStyle}>
          Khiếu nại: <span className={contactInfor}>1800.6173</span>
        </p>
        <p className={textStyle}>
          Email: <span className={contactInfor}>cskh@gearvn.com</span>
        </p>
      </div>
      <div className="w-1/4">
        <h4 className={titleStyle}>ĐƠN VỊ VẬN CHUYỂN</h4>
        <div className="flex">
          <ImageTag>
            {
              "https://theme.hstatic.net/200000722513/1001090675/14/ship_1.png?v=6086"
            }
          </ImageTag>
          <ImageTag>
            {
              "https://theme.hstatic.net/200000722513/1001090675/14/ship_2.png?v=6086"
            }
          </ImageTag>
          <ImageTag>
            {
              "https://theme.hstatic.net/200000722513/1001090675/14/ship_3.png?v=6086"
            }
          </ImageTag>
          <ImageTag>
            {
              "https://theme.hstatic.net/200000722513/1001090675/14/ship_4.png?v=6086"
            }
          </ImageTag>
        </div>
        <h4 className={titleStyle}>CÁCH THỨC THANH TOÁN</h4>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <ImageTag>
              {
                "https://theme.hstatic.net/200000722513/1001090675/14/pay_1.png?v=6086"
              }
            </ImageTag>
            <ImageTag>
              {
                "https://theme.hstatic.net/200000722513/1001090675/14/pay_2.png?v=6086"
              }
            </ImageTag>
            <ImageTag>
              {
                "https://theme.hstatic.net/200000722513/1001090675/14/pay_3.png?v=6086"
              }
            </ImageTag>
            <ImageTag>
              {
                "https://theme.hstatic.net/200000722513/1001090675/14/pay_4.png?v=6086"
              }
            </ImageTag>
          </div>
          <div className="flex gap-1">
            <ImageTag>
              {
                "https://theme.hstatic.net/200000722513/1001090675/14/pay_5.png?v=6086"
              }
            </ImageTag>
            <ImageTag>
              {
                "https://theme.hstatic.net/200000722513/1001090675/14/pay_6.png?v=6086"
              }
            </ImageTag>
            <ImageTag>
              {
                "https://theme.hstatic.net/200000722513/1001090675/14/pay_7.png?v=6086"
              }
            </ImageTag>
            <ImageTag>
              {
                "https://theme.hstatic.net/200000722513/1001090675/14/pay_8.png?v=6086"
              }
            </ImageTag>
          </div>
        </div>
      </div>
    </div>
  );
}
