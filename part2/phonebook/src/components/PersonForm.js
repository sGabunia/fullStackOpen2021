import React from "react";

const PersonForm = ({
  handleSubmit,
  newName,
  handleOnChange,
  newNumber,
  handleNumberOnChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleOnChange} />
        <div>
          number: <input value={newNumber} onChange={handleNumberOnChange} />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
