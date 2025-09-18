import React, { use } from 'react';

const Countries = ({ countriesPromies }) => {
    const countriesData = use(countriesPromies);
    const countries = countriesData.countries;
    console.log(countries);
    
  return (
    <div>
      <h1>React on the goooo: {countries.length} </h1>
    </div>
  );
};

export default Countries;