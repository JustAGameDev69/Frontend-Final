import FooterCopyright from "./FooterCopyright";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <div className="w-full bg-white mt-3">
      <div className="content-container">
        <FooterTop />
        <FooterCopyright />
      </div>
    </div>
  );
}
