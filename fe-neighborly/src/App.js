import Footer from "./components/footer/Footer";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Newoffer from "./components/new-offer/Newoffer";
import Offer from "./components/offers/Offers";
import Searchbar from "./components/searchbar/Searchbar";
import Login from "./components/login/Login";
import { Route, Routes, useParams } from "react-router-dom";
import Herosection from "./components/Hero/Herosection";
import { useEffect, useState } from "react";
import axios from "./axiosClient";
import UserPage from "./components/User/UserPage";
import Register from "./components/Register/Register";
//import {useParams} from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [product, setProduct] = useState([]);
  const [selected, setSelected] = useState("");
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("")
  // const params = useParams(); 
  useEffect(() => {
    axios
      .get(`/posts?category=${selected}`)
      .then((res) => {
        setPosts(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selected]);

  useEffect(() => {
    axios
      .get("/posts")
      .then(res => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
    }, []
  )

  return (
    <div className="page-container">
      <div className="content-wrap">
        {window.location.pathname !== '/login' && window.location.pathname !== '/signup' && <Navbar />}
        {window.location.pathname !== '/login' && window.location.pathname !== '/signup' && <Herosection product={product} search={search} setSearch={setSearch}/>}
        <div>
          <Routes>
            <Route path="/" element={<Home product={product} />} />
            <Route
              path="/offer"
              element={
                <Offer
                  posts={posts}
                  setPosts={setPosts}
                  selected={selected}
                  setSelected={setSelected}
                />
              }
            />
            <Route path="/newoffer" element={<Newoffer />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </div>
      </div>
      {window.location.pathname !== '/login' && window.location.pathname !== '/signup' && <Footer />}
    </div>
  );
}

export default App;