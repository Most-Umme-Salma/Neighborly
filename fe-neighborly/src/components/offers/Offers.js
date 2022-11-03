import Pricefilter from "../home/Pricefilter";
import ProductTiles from "../Product/ProductTiles";
import Category from "../category/Category";
import "./offers.css";

export default function Offers({ posts, selected, setSelected }) {
  return (
    <div className="offers-container">
      <div className="filters">
        <Category selected={selected} setSelected={setSelected} />
        <p className="text-pricefilter">Filter by price</p>
        <div>
          <Pricefilter />
          <div className="price-range">
            <p>0€</p>
            <p>999€</p>
          </div>
        </div>
      </div>
      <ProductTiles posts={posts} />
    </div>
  );
}
