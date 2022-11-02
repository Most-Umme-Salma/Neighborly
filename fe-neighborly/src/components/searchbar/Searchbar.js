import "./searchbar.css"
import PrimaryButton from "../Buttons/PrimaryButton"
import {useState, useEffect} from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
import List from "./List";

function Searchbar({product}){    

    const [search, setSearch] = useState(" ")

    
    const handleInput=(e)=>{
        //setSearch(e.taget.value.toLowerCase());
        setSearch(e.target.value);
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        window.location.replace(`/offer`)
    }

    return (
    <form onSubmit={handleSubmit} className="searchbar-container">
        <input 
        className="searchfield"
        type="text"
        id="search"
        placeholder="Search your Neighbourhood"
        value={search}
        onChange={handleInput}
        />
        <div className="button-container">
        <SecondaryButton text="Categories" onClick={handleSubmit}/>
        <PrimaryButton text="search"/>
        </div>
    </form>)
}


export default Searchbar;