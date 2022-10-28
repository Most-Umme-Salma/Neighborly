import "./searchbar.css"
import PrimaryButton from "../Buttons/PrimaryButton"
import TertiaryButton from "../Buttons/TertiaryButton";

function Searchbar(){

    // function Dropdown() {
    //     document.getElementById("myDropdown").classList.toggle("show");
    //   }

    //   window.onclick = function(event) {
    //     if (!event.target.matches('.dropbtn')) {
    //       var dropdowns = document.getElementsByClassName("dropdown-content");
    //       var i;
    //       for (i = 0; i < dropdowns.length; i++) {
    //         var openDropdown = dropdowns[i];
    //         if (openDropdown.classList.contains('show')) {
    //           openDropdown.classList.remove('show');
    //         }
    //       }
    //     }
    //   }
    
    return <div className="searchbar-container">
        <input 
        className="searchfield"
        type="text"
        id="search"
        placeholder="Search your Neighbourhood"
        />
        <div className="button-container">
        <TertiaryButton />
        <PrimaryButton />
        </div>
    </div>
}


export default Searchbar;