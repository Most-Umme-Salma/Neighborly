import React from "react";
import './home.css';

export default function ItemCardService({product}) {
  return (
      <section className="card-wrapper">
        {product.slice(0,8).map((product, _id) => {
          return (
            <div key={_id} className="card">
                <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80" className="card-img-top" alt="cardtitle"/>
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
