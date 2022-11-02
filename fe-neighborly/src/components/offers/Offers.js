import Pricefilter from "../home/Pricefilter";
import ProductTiles from "../Product/ProductTiles";
import Category from "../category/Category";
import "./offers.css"

export default function Offers({ posts, selected, setSelected }) {
  return (
    <div className="offers-container">
      <div className="filters">
        <Category selected={selected} setSelected={setSelected} />
        <p>Filter by price</p>
        <Pricefilter />
      </div>
      <ProductTiles posts={posts} />
    </div>
  );
}
