import Pricefilter from "../home/Pricefilter";
import ProductTiles from "../Product/ProductTiles";
import Category from "../category/Category";

export default function Offers({ posts, selected, setSelected }) {
  return (
    <div>
      <Category selected={selected} setSelected={setSelected} />
      <div className="filters">
        <p>Filter by price</p>
        <Pricefilter />
      </div>
      <ProductTiles posts={posts} />
    </div>
  );
}
