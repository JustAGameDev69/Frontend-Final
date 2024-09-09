import SvgReturn from "../../SvgReturn";

export default function ProductCardDetail({ name, content }) {
  return (
    <div className="product-carousel-card-content-detail-item">
      <SvgReturn name={name} />
      {content}
    </div>
  );
}
