import React, { useState } from "react";
import ReactDOM from "react-dom";

// test macostestß

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));

  const getRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  };

  const name = "Sergo ";

  const calculateVotes = () => {
    const copy = [...votes];
    copy[selected] = copy[selected] + 1;
    setVotes(copy);
  };

  const maxVotes = Math.max(...votes);
  const index = votes.indexOf(maxVotes);

  console.log(votes);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={calculateVotes}>vote</button>
      <button onClick={getRandomAnecdote}>next anecdote</button>
      <h1>Anecdote with the most vote</h1>
      <p>{props.anecdotes[index]}</p>
      <p>has {votes[index]} votes</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
