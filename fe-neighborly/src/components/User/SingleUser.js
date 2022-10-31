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
            <img src={user.img}></img>
            <h1 className="username">{user.name}</h1>
            <p>Test TEst</p>
            <p>{user.short_description}</p>
            <p>From: {user.post_code}</p>
            <p>{user.description}</p>
          </>
        )}
      </div>
    </>
  );
}

export default SingleUser;
