import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Newoffer from "./components/new-offer/Newoffer";
import Offer from "./components/offers/Offers";
import Promotions from "./components/promotions/Promotions";
import Searchbar from "./components/searchbar/Searchbar";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./components/category/Category";

function App() {
  const [posts, setPosts] = useState();
  const [selected, setSelected] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/newoffer" element={<Newoffer />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/searchbar" element={<Searchbar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Category selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}

export default App;
