import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleCountry = (country) => {
  const { name, capital, population, languages, flag } = country.country;
  const [weather, setWeather] = useState({});

  const api_key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
      )
      .then((response) => {
        setWeather(response.data.current);
      });
  }, [capital]);

  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>

      <h3>languages</h3>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language.name}</li>
        ))}
      </ul>

      <img src={flag} alt="flag" style={{ width: "100px" }} />

      {Object.keys(weather).length !== 0 && (
        <>
          <h2>Weather in {capital}</h2>
          <p>
            <strong>temperature:</strong> {weather.temperature} celsius
          </p>

          <img
            src={weather.weather_icons[0]}
            alt={weather.weather_descriptions[0]}
          />
          <p>
            <strong>wind:</strong> {weather.wind_speed} mph direction{" "}
            {weather.wind_dir}
          </p>
        </>
      )}
    </div>
  );
};

export default SingleCountry;
