{
  /*import "./Category";
  import { useEffect, useState } from "react";
  import axios from "axios";
  
  export default function Categories() {
    const [posts, setPosts] = useState();
    const [selected, setSelected] = useState("");
    useEffect(() => {
      axios
        .get(`http://localhost:3001/posts?category=${selected}`)
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [selected]);
    return (
      <div>
        <Category selected={selected} setSelected={setSelected} />
      </div>
    );
  }
  */
}
