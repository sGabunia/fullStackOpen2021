import React, { useState } from "react";

const Country = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { name, capital, population, languages, flag } = country;

  return (
    <div>
      <span>{name}</span>
      <button onClick={() => setShowDetails(!showDetails)}>
        {!showDetails ? "show" : "hide"}
      </button>
      {showDetails && (
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
        </div>
      )}
    </div>
  );
};
export default Country;
