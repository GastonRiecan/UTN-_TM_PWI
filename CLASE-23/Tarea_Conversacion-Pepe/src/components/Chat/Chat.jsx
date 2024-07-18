import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import {  Link } from "react-router-dom";

const Chat = ({ data }) => {
  const [message, setMessage] = useState("");
  const [contactData, setContactData] = useState(data);
  const inputRef = useRef();
  const lastMessageRef = useRef();


  useEffect(() => {
    inputRef && inputRef.current && inputRef.current.focus();

    lastMessageRef &&
      lastMessageRef.current &&
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });

    if (
      contactData.chatHistory.length % 4 === 0 &&
      contactData.chatHistory.length != 4
    ) {
      const pepeMessage = {
        author: contactData.name,
        content: "mensaje del más allá",
        date: "ahora",
        state: "visto",
        id: crypto.randomUUID(),
      };
      setContactData({
        ...contactData,
        chatHistory: [...contactData.chatHistory, pepeMessage],
      });
    }
  }, [contactData.chatHistory]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!message) return;

    const newMessage = {
      author: "yo",
      content: message,
      date: "ahora",
      state: "visto",
      id: crypto.randomUUID(),
    };

    setContactData({
      ...contactData,
      chatHistory: [...contactData.chatHistory, newMessage],
    });
    setMessage("");
  }

  function handleMessageChanged(e) {
    setMessage(e.target.value);
  }
  
  return (
    <>
      <div className="container">
        <div
          className="header"
          style={{
            border: "1px solid grey",
            borderRadius: "10px",
            margin: "4px",
          }}
        >
        <Link to="/">
          {`<---`}
        </Link>
        <Link to={`/info/${contactData.id}`}>
          <img src={`/images/${contactData.profilePicture}`} style={{width: '30px', borderRadius: "50%"}} />
          {contactData.name}
        </Link>
        🔍
        </div>
        <div className="scrollable">
          {contactData.chatHistory.map(({ author, content, date, state, id }) => (
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

export default Chat;
