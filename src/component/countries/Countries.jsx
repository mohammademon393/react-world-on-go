import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromies }) => {
  const countriesData = use(countriesPromies);
  const countries = countriesData.countries;
  console.log(countries);

  return (
    <div>
      <h1>React on the goooo: {countries.length} </h1>
      {
        countries.map(country => <Country country={country}></Country>)
      }
    </div>
  );
};

export default Countries;
