import Pricefilter from "./Pricefilter";

import ProductsDisplay from "../Product/ProductsDisplay";
import Category from "../category/Category";

export default function Home({ posts, setPosts, selected, setSelected }) {
  return (
    <div>
      <Category selected={selected} setSelected={setSelected} />
      <div className="filters">
        <p>Filter by price</p>
        <Pricefilter />
      </div>
      <ProductsDisplay posts={posts} />

      <div className="filters">
        <p>Filter by Retings</p>
        {/* <RetingsFilter />*/}
      </div>
    </div>
  );
}
