import React from "react";

const Persons = ({ name, number, handleDelete }) => {
  return (
    <div>
      <span>
        {name} {number}
      </span>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default Persons;
