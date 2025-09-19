import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);
// console.log(handleVisitedFlag);

  //   console.log(country.currencies);
  // console.log(country.flags.flags.png);

  const heandleVisited = () => {
    // 1. toggling system
    // if (visited) {
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }

    // 2. toggleing system coditional randering
    // setVisited(visited ? false : true)

    // 3. Logial NOT
    setVisited(!visited);
    handleVisitedCountries(country);
    handleVisitedFlag(country);
  };

//   const handleFlags = ()=>{
//     handleVisitedFlag(country);
//   }

  return (
    <div className={`country ${visited && "visited-country"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common} </h3>
      <p>Population: {country.population.population}</p>
      <h5>Region: {country.region.region}</h5>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Bis Country" : "Small Country"}
      </p>

      <button className={`btn ${visited && "btn2"}`} onClick={heandleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
      {/* <button onClick={handleFlags} className="btn">
        Add visited flag
      </button> */}
    </div>
  );
};

export default Country;
