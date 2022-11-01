import ItemCardService from "./ItemCardService";
import './home.css';
import { Link } from 'react-router-dom';

export default function Home({product}) {
  return (
    <section className="home-wrapper">
      <h1>Newest Entries</h1>
      <ItemCardService product={product} />
      <Link to='/'>
      </Link>
    </section>
  )
}
