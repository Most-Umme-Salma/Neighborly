import './Hero.css';
import Searchbar from '../searchbar/Searchbar';
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from '../Buttons/SecondaryButton';
import TertiaryButton from '../Buttons/TertiaryButton';

function Herosection({product, search, setSearch}) {
  return (
    <div className="Hero-Section">
        <div className='Hero-Main-Box'>
          <div className='Hero-Text'>
              <h1>Neighbourly</h1>
              <h2>Helping pays!</h2>
              <p>At Neighbourly its all about helping eachother. Find a new Job or someone to help you.</p>
          </div>
          <Searchbar product={product} search={search} setSearch={setSearch} />
        </div>
    </div>
  );
}

export default Herosection;
