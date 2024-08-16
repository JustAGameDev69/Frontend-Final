import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";

export default function Header() {
  return (
    <div>
      <div className="w-full bg-[#FFD320]">
        <img
          className="content-container"
          src="https://file.hstatic.net/200000722513/file/ffd320_header_banner_b2s.png"
          alt="ads"
        />
      </div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}
