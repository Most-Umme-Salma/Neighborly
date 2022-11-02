import React from "react";
import './home.css';

export default function ItemCardService({product}) {
  return (
      <section className="card-wrapper">
        {product.map((product, _id) => {
          return (
            <div key={_id} className="card">
        {console.log(product)}
                <img src="product.img" className="card-img-top" alt="cardtitle"/>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    {product.description}
                  </p>
                  <button className="btn btn-success">Add to cart</button>
                </div>
            </div>
          )
        }
      ).reverse()}
    </section>
  );
}
