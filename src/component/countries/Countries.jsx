import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromies }) => {
  const countriesData = use(countriesPromies);
  const countries = countriesData.countries;

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (country) => {
    const newFlags = [...visitedFlags, country];
    setVisitedFlags(newFlags);
  };

  //   console.log(countries);

  return (
    <div>
      <h1>React on the goooo: {countries.length} </h1>

      <h3>Visited Countries: {visitedCountries.length} </h3>

      <div>
        {visitedFlags.map((country) => (
          <img
            className="img-design"
            key={country.cca3.cca3}
            src={country.flags.flags.png}
          ></img>
        ))}
        <ol>
          {visitedCountries.map((country) => (
            <li key={country.cca3.cca3}>{country.name.common}</li>
          ))}
        </ol>
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
