import ItemCardService from "./ItemCardService";
import './home.css';
import { Link } from 'react-router-dom';

export default function Home({product}) {
  const productServices = [];
  const productHobby = [];
  const productHome = [];
  return (
    <section className="home-wrapper">
      <div className="d-flex flex-col">
        <h1>Services</h1>
      
        <div className="card-wrapper">
          {console.log(product)}
          {/*map and check which products have category service & render card items correspondingly */}
          { product.map((product, id) => {
            if (product.category[0] === 'service') {
              productServices.push(product)
            }
          })}
          <ItemCardService product={productServices}  />
        </div>
      </div>
      
      <div className="d-flex flex-col">
        <h1>Hobby</h1>
      {/*map and check which products have category hobby & render card items correspondingly */}
        <div className="card-wrapper">
          { product.map((product, id) => {
            if (product.category[0] === 'hobby') {
              productHobby.push(product)
            }
          })}
          <ItemCardService product={productHobby}  />
        </div>
      </div>

      <div className="d-flex flex-col">
        <h1>Home</h1>
      {/*map and check which products have category home & render card items correspondingly */}
        <div className="card-wrapper">
          { product.map((product, id) => {
            if (product.category[0] === 'home') {
              productHome.push(product)
            }
          })}
          <ItemCardService product={productHome}  />
        </div>
      </div>

      <Link to='/'>
      </Link>
    </section>
  )
}