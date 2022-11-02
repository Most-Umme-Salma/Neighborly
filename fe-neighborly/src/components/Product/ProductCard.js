import { useState, useEffect } from 'react';
import axios from "../../axiosClient";
import './SingleProduct.css';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate= useNavigate();
    const [product, setProduct] = useState([]);
    const {id} = useParams()


    useEffect(() => {

      axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts/${_id}`)
        .then((res) => {
          setProduct(res.data)
        })
        .catch((err) => { console.log(err) })
    }, [])
    return (<div className='product'>{product &&
            <section>
                    {<img className='product-img' src={procuct.img} />}
                    <h3 className='product-title'>{product.title}</h3>
                    {product.description.content.map((content, i) => {
                        if (content.nodeType === "paragraph") {
                            return (<p className='product-description' key={product._id + i} > {content.content[0].value} </p>);
                        }
                    })}
                </section>
            }
            </div>
    )
};

export default Product;