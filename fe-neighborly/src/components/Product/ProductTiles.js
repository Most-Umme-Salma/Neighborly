import "./ProductTiles.css";
import { useNavigate } from "react-router-dom";

const ProductTiles = ({ posts }) => {
  const navigate = useNavigate();
 
  return (
    <div className="tiles-wrapper">
      {posts?.map((product, _id) => {
        return (
          <section key={_id} className="product-tiles">
            <div>
                {<img className="tile-image" src={product.img} alt={`This is ${product.name}`}/>}
            </div>
            <div className="tile-text-field">
                <h3 className="tile-title">{product.title}</h3>
                <p className="tile-description">{product.description}</p>
                <div className="inline">
                    <button
                    className="tile-more-button"
                    onClick={() => {
                        navigate(`/product/${product._id}`);
                    }}
                    >
                    More{" "}
                    </button>
                    <h3 className="tile-price">{product.price}</h3>
                </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductTiles;
