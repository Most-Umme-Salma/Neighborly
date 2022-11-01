import "./searchbar.css"
import PrimaryButton from "../Buttons/PrimaryButton"
import TertiaryButton from "../Buttons/TertiaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

function Searchbar(){    
    return <div className="searchbar-container">
        <input 
        className="searchfield"
        type="text"
        id="search"
        placeholder="Search your Neighbourhood"
        />
        <div className="button-container">
        <SecondaryButton text="Categories"/>
        <PrimaryButton text="search"/>
        </div>
    </div>
}


export default Searchbar;