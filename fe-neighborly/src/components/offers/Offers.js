import Pricefilter from "../home/Pricefilter";
import ProductTiles from "../Product/ProductTiles";
import Category from "../category/Category";

export default function Offers({ posts, setPosts, selected, setSelected }) {
  return (
    <div>
      <div className="filters">
        <Category selected={selected} setSelected={setSelected} />
        <p>Filter by price</p>
        <Pricefilter />
      </div>
      <ProductTiles posts={posts} />
    </div>
  );
}
