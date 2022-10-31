import ProductsDisplay from "../Product/ProductsDisplay"

function SingleUser(user) {
    return (
      <>
        <div className="userContainer">
            <img src={user.img}></img>
            <h1>{user.name}</h1>
            <p>{user.short_description}</p>
            <p>From: {user.post_code}</p>
            <p>{user.description}</p>
        </div>
        <div className="productsContainer">
            <ProductsDisplay />
        </div>
      </>
    );
  }

  export default SingleUser