import "./ProductCarousel_Card.css";
import ProductCardDetail from "../ProductCardDetail";
import SvgReturn from "../../../SvgReturn";

//Calculate the current price after minus the sale value, then return the currency format!
function calculateRoundedPercent(a, b) {
  const numberA = parseFloat(a.replace(/\./g, ""));
  const percent = numberA * (b / 100);
  const roundedPercent = Math.round(percent / 10000) * 10000;
  const number = numberA - roundedPercent;

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function ProductCarousel_Card({ product }) {
  const {
    CPU: cpu,
    VGA: vga,
    mainboard,
    RAM: ram,
    SSD: ssd,
    HDD: hdd,
    monitor,
    refreshRate,
    battery,
    connect,
    led,
    layout,
    keycap,
    size,
    panel,
    resolution,
  } = product.components;
  const { image_1: cardImage } = product.image;
  const price = product.price;

  return (
    <div className="product-carousel-card">
      <div className="product-carousel-card-img">
        <img src={cardImage} />
      </div>
      <div className="product-carousel-card-content">
        <p className="product-carousel-card-content-title">{product.title}</p>
        {product.components && (
          <>
            <div className="product-carousel-card-content-detail">
              {cpu && <ProductCardDetail name="cpu" content={cpu} />}
              {vga && <ProductCardDetail name="vga" content={vga} />}
              {mainboard && (
                <ProductCardDetail name="mainboard" content={mainboard} />
              )}
              {ram && <ProductCardDetail name="ram" content={ram} />}
              {ssd && <ProductCardDetail name="ssd" content={ssd} />}
              {hdd && <ProductCardDetail name="hdd" content={hdd} />}
              {monitor && (
                <ProductCardDetail name="monitor" content={monitor} />
              )}
              {refreshRate && (
                <ProductCardDetail name="refreshRate" content={refreshRate} />
              )}
              {battery && (
                <ProductCardDetail name="battery" content={battery} />
              )}
              {connect && (
                <ProductCardDetail name="connect" content={connect} />
              )}
              {led && <ProductCardDetail name="led" content={led} />}
              {layout && <ProductCardDetail name="layout" content={layout} />}
              {keycap && <ProductCardDetail name="keycap" content={keycap} />}
              {size && <ProductCardDetail name="monitor" content={size} />}
              {panel && <ProductCardDetail name="panel" content={panel} />}
              {resolution && (
                <ProductCardDetail name="resolution" content={resolution} />
              )}
            </div>
          </>
        )}
        <p className="product-carousel-card-content-detail-base-price">
          {price}₫
        </p>
        <p className="product-carousel-card-content-detail-current-price">
          {product.sale
            ? calculateRoundedPercent(price, product.sale) + "₫"
            : `${price}₫`}
          {product.sale && <span>{`-${product.sale}%`}</span>}
        </p>
        <p className="product-carousel-card-content-detail-rating">
          0
          <SvgReturn name="rating" />
          <span>(0 đánh giá)</span>
        </p>
      </div>
    </div>
  );
}
