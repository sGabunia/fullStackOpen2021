import React from "react";

const Filter = ({ handleOnChange, filteredPerson }) => {
  return (
    <div>
      filter shown with <input onChange={handleOnChange} />
      {filteredPerson.map((contact, index) => (
        <p key={index}>
          {contact.name} {contact.number}
        </p>
      ))}
    </div>
  );
};

export default Filter;
