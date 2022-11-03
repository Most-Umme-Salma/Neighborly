import "./ProductTiles.css";
import { useNavigate } from "react-router-dom";

const ProductTiles = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div className="tiles-wrapper">
      {posts?.map((product, id) => {
        return (
          <section key={id} className="product-tiles">
            <div className="tile-image">
                <img src="https://th.bing.com/th/id/OIP.nwTnY29OdJbWgueofEefRQHaHa?pid=ImgDet&rs=1" className="tite-image__src" alt={product.title}/>
            </div>
            <div className="tile-text-field">
                <h3 className="tile-title">{product.title}</h3>
                <p className="tile-description">{product.description}</p>
                <div className="inline">
                    <button
                    className="tile-more-button"
                    onClick={() => {
                        navigate(`/product/${product.id}`);
                    }}
                    >
                    More{" "}
                    </button>
                    <h3 className="tile-price">{product.price} €</h3>
                </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductTiles;
