import React from "react";
import Country from "./Country";
import SingleCountry from "./SingleCountry";

const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length === 1) {
    return <SingleCountry country={countries[0]} />;
  }

  return (
    <div style={{ marginTop: "1rem" }}>
      {countries.map((country, index) => (
        <Country key={index} country={country} />
      ))}
    </div>
  );
};

export default Countries;
