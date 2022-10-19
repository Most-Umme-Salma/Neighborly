import {Link} from "react-router-dom"

export default function Navbar(){

    return <nav>
        <div>
            <div className="nav-left">
            <Link to="/" className="nav-home"> Home </Link>
            <Link to='/offer' className="nav-offer"> Offers </Link>
            <Link to='/newoffer' className="nav-newoffer"> New offer </Link>
            <Link to='/promotions' className="nav-promotions"> Promotions </Link>
            </div>
            <div className="nav-right">
            <Link to='/searchbar' className="nav-searchbar"> Searchbar </Link>
            </div>
        </div>
    </nav>
}