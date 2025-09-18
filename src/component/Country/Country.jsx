import './Country.css';
const Country = ({country}) => {

    console.log(country.currencies);
    // console.log(country.flags.flags.png);
    

    return (
      <div className='country'>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h3>Name: {country.name.common} </h3>
        <p>Population: {country.population.population}</p>
        <h5>Region: {country.region.region}</h5>
      </div>
    );
};

export default Country;