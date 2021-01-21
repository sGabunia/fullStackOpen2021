import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("17");
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const searchCountry = (e) => {
    setCountry(e.target.value);
  };

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(country.toLowerCase())
  );

  return (
    <div>
      <div>
        find countries
        <input onChange={searchCountry} style={{ marginLeft: "0.7rem" }} />
      </div>
      <Countries countries={filteredCountries} />
    </div>
  );
};

export default App;
