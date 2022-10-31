import ProductsDisplay from "../Product/ProductsDisplay";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SingleUser.css";

function SingleUser() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="userContainer">
        {user && (
          <>
            {console.log(user.name)}
            {/* <img className="userPicture" src={user.img}></img> */}
            <img className="userPicture" src="https://i.pinimg.com/originals/11/27/22/11272211bab4f1d53477e3334426e032.jpg"></img>
            {/* <h1 className="username">{user.name}</h1> */}
            <h2 className="username">Sweet Kitty</h2>
            {/* <p className="shortDescription">{user.short_description}</p> */}
            <p className="shortDescription">Like strings, mice and food</p>
            {/* <p className="location">From: {user.post_code}</p> */}
            <div className="location flex">
                <p id="flexStart">From:</p>
                <p id="flexEnd">Berlin</p>
            </div>
            <div className="memberSince flex">
                <p>Member since:</p>
                <p>2022</p>
            </div>
            <div className="responseTime flex">
                <p>Response Time:</p>
                <p>1.5 hours</p>
            </div>
            {/* <p className="longDescription">{user.description}</p> */}
            <p className="longDescription">meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow</p>
          </>
        )}
      </div>
    </>
  );
}

export default SingleUser;
