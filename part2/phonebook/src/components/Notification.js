import React from "react";

const Notification = ({ message }) => {
  return (
    <div className={message.type === `error` ? "error" : `success`}>
      {message.text}
    </div>
  );
};

export default Notification;
