import "./searchbar.css"
import PrimaryButton from "../Buttons/PrimaryButton"
import {useState, useEffect} from "react";
import SecondaryButton from "../Buttons/SecondaryButton";

function Searchbar({product}){    

    const [search, setSearch] = useState(" ")
    return (<>
    <h2>Hieeeeeeee</h2>
    {product?.map((prod, id)=>{console.log(prod)})}</>)
    
    
    // product.map((prod)=>{console.log(prod)})
    // const handleInput=(e)=>{
    //     //setSearch(e.taget.value.toLowerCase());
    //     setSearch(e.target.value);
    // }
    // const handleSubmit =(e) =>{
    //     e.preventDefault();
    //    // product?.map((prod)=>{console.log(prod)})

    // }
    // return (
    // <form onSubmit={handleSubmit} className="searchbar-container">
    //     <input 
    //     className="searchfield"
    //     type="text"
    //     id="search"
    //     placeholder="Search your Neighbourhood"
    //     value={search}
    //     onChange={handleInput}
    //     />
    //     <div className="button-container">
    //     <SecondaryButton text="Categories" onClick={handleSubmit}/>
    //     <PrimaryButton text="search"/>
    //     </div>
    // </form>)
}


export default Searchbar;