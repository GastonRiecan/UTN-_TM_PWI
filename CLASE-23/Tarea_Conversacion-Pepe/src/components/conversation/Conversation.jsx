import React from "react";
import "./styles.css";

const Conversation = ({ data }) => {
  return (
    <div className="container">
      {data.map(({ id, author, content, date, state }) => (
        <div
          className={`row ${author === "yo" ? "sent" : "received"}`}
          key={id}
        >
          <div className="chat-container">
            <div className="header">{author}</div>
            <div className="content">{content}</div>
            <div className="footer">{date}&nbsp;<span className={ state === "visto" && "blue"}>&#10003;&#10003;</span></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conversation;
