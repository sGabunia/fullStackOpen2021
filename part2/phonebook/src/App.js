import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "040-123456" },
    { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 3, name: "Dan Abramov", number: "12-43-234345" },
    { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([]);

  const addPerson = (e) => {
    e.preventDefault();
    const isPersonAlreadyInList = persons.some(
      (person) => person.name === newName
    );
    if (isPersonAlreadyInList) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
    } else {
      setPersons([
        ...persons,
        { id: persons.length + 1, name: newName, number: newNumber },
      ]);
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNewPerson = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    const filtered = persons.filter(
      (person) => person.name.toLowerCase() === e.target.value.toLowerCase()
    );

    setFilteredPerson(filtered);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleOnChange={handleFilter} filteredPerson={filteredPerson} />

      <h3>Add an new</h3>

      <PersonForm
        handleSubmit={addPerson}
        newName={newName}
        handleOnChange={handleNewPerson}
        newNumber={newNumber}
        handleNumberOnChange={handleNewNumber}
      />

      <h3>Numbers</h3>

      {persons.map((person) => (
        <Persons key={person.id} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default App;
