import React, { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([]);
  const [message, setMessage] = useState({
    type: null,
    text: "",
  });

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    const isPersonAlreadyInList = persons.some(
      (person) => person.name === newName
    );
    const personToUpdate = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (isPersonAlreadyInList) {
      const answer = window.confirm(
        `${personToUpdate.name} already added to phonebook, replace the old number with a new one?`
      );
      if (answer) {
        const newPerson = { ...personToUpdate, number: newNumber };

        personService
          .update(newPerson.id, newPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== newPerson.id ? person : returnedPerson
              )
            );
            setMessage({ type: "success", text: `Number is updated` });

            setTimeout(() => setMessage({ type: null }), 3000);
            setNewNumber("");
            setNewName("");
          })
          .catch((error) => {
            setMessage({
              type: "error",
              text: `Information of ${newPerson.name} has already been removed from server`,
            });
            setTimeout(() => setMessage({ type: null }), 3000);

            const newArr = persons.filter(
              (person) => person.id !== newPerson.id
            );
            setPersons(newArr);
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      personService.create(newPerson).then((addedPerson) => {
        setPersons([...persons, addedPerson]);
        setMessage({ text: `added ${newName}`, type: "success" });
        setTimeout(() => setMessage({ type: null }), 2000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    const answer = window.confirm(`Delete ${personToDelete.name}?`);
    if (answer) {
      personService.deletePerson(id, personToDelete);
      setPersons(persons.filter((person) => person.id !== id));
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
      {message.type && <Notification message={message} />}
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
        <Persons
          key={person.id}
          name={person.name}
          number={person.number}
          handleDelete={() => deletePerson(person.id)}
        />
      ))}
    </div>
  );
};

export default App;
