import Pricefilter from "./Pricefilter";
import RetingsFilter from "./RetingsFilter";
export default function Home(value) {
  return (
    <div>
      <div className="filters">
        <p>Filter by price</p>
        <Pricefilter value={value} />
      </div>
      <div className="filters">
        <p>Filter by Retings</p>
        <RetingsFilter />
      </div>
    </div>
  );
}
