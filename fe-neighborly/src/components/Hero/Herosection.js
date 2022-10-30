import './Hero.css';
import Searchbar from '../searchbar/Searchbar';
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from '../Buttons/SecondaryButton';
import TertiaryButton from '../Buttons/TertiaryButton';

function Herosection() {
  return (
    <div className="Hero-Section">
        <div className='Hero-Main-Box'>
                <div className='Hero-Text'>
                   <h1>Neighbourly</h1>
                   <h2>Helping pays!</h2>
                    <p>At Neighbourly its all about helping eachother. Find a new Job or someone to help you.</p>
                </div>
                <div className="Searchbar-Background">
                   <Searchbar />
                </div>
        </div>
    </div>
  );
}

export default Herosection;
