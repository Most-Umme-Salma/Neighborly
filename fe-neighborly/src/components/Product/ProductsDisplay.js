import './ProductsDisplay.css';
import { useNavigate } from 'react-router-dom';

const ProductsDisplay = (product) => {
    const navigate= useNavigate();
    // const filter = () => {
    //     if(productFilter) {
    //         return product.filter( => product.category === productFilter);
    //     }
    //     return products;
    // }
    return (
        
        <div className="wrapper">{filter().map((product, _id) => {
            return (
                <section key={_id} className="product-cards">
                    {console.log(product)}
                    {<img className="image" src={product.img} />}
                    <h3 className="title">{product.title}</h3>
                    <button className="more-button" onClick={() => { navigate(`/product/${product._id}`)}}>More </button>

                </section>
            )
        })}
        </div>
    )
};

export default ProductsDisplay;