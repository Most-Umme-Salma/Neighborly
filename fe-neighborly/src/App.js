import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Newoffer from "./components/new-offer/Newoffer";
import Offer from "./components/offers/Offers";
import Promotions from "./components/promotions/Promotions";
import Searchbar from "./components/searchbar/Searchbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/newoffer" element={<Newoffer />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/searchbar" element={<Searchbar />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
