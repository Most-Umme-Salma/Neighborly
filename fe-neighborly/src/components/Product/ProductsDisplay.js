import "./ProductsDisplay.css";
import { useNavigate } from "react-router-dom";

const ProductsDisplay = ({ posts }) => {
  const navigate = useNavigate();
  // const filter = () => {
  //     if(productFilter) {
  //         return product.filter( => product.category === productFilter);
  //     }
  //     return products;
  // }
  return (
    <div className="wrapper">
      {posts?.map((product, _id) => {
        return (
          <section>
            <div key={_id} className="product-cards">
            {<img className="image" src={product.img} />}
            <h3 className="title">{product.title}</h3>
            <h3 className="price">{product.price}</h3>
            <button
              className="more-button"
              onClick={() => {
                navigate(`/product/${product._id}`);
              }}
            >
              More{" "}
            </button>
            </div>
          </section>
          
        );
      })}
    </div>
  );
};

export default ProductsDisplay;
