import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = () => <h1>give feedback</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad, all, average, positive, title }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <h3>{title}</h3>
      <table>
        <Statistic value={good} text="good" />
        <Statistic value={neutral} text="neutral" />
        <Statistic value={bad} text="bad" />
        <Statistic value={all} text="all" />
        <Statistic value={average.toFixed(1)} text="average" />
        <Statistic value={positive.toFixed(1) + " %"} text="positive" />
      </table>
    </div>
  );
};

const Statistic = ({ value, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <Header />

      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={total}
        average={average}
        positive={positive}
        title="statistics"
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
