import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const Conversation = ({ data }) => {
  const [message, setMessage] = useState("");
  const [finalData, setFinalData] = useState(data);
  const inputRef = useRef();
  const lastMessageRef = useRef();

  useEffect(() => {

    inputRef && inputRef.current && inputRef.current.focus();

    lastMessageRef && lastMessageRef.current && lastMessageRef.current.scrollIntoView({behavior:"smooth"})

    if (finalData.length % 4 === 0 && finalData.length != 4) {
      const pepeMessage = {
        author: "pepe",
        content: "mensaje del más allá",
        date: "ahora",
        state: "visto",
        id: crypto.randomUUID(),
      };
      setFinalData([...finalData, pepeMessage]);
    }

  }, [finalData]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!message) return

    const newMessage = {
      author: "yo",
      content: message,
      date: "ahora",
      state: "visto",
      id: crypto.randomUUID(),
    };

    setFinalData([...finalData, newMessage]);
    setMessage("");
  }

  function handleMessageChanged(e) {
    setMessage(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="scrollable">
          {finalData.map(({ id, author, content, date, state }) => (
            <div
              className={`row ${author === "yo" ? "sent" : "received"}`}
              key={id} 
              ref={lastMessageRef}
            >
              <div className="chat-container">
                <div className="header">{author}</div>
                <div className="content">{content}</div>
                <div className="footer">
                  {date}&nbsp;
                  <span className={state === "visto" ? "blue" : ""}>
                    &#10003;&#10003;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e, message)}>
        <input
          type="text"
          onChange={handleMessageChanged}
          value={message}
          ref={inputRef}
          placeholder="Escribe un mensaje"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Conversation;
