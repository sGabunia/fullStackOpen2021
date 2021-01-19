import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  const total = parts.reduce((acc, item) => acc + item.exercises, 0);

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </div>
  );
};

export default Content;
