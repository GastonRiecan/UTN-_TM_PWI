import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Header from "../Header/Header";

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
      author: "Yo",
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
      <div className="container">
        <Header contactData={contactData} />
        <div className="scrollable">
          {contactData.chatHistory.map(
            ({ author, content, date, state, id }) => (
              <div
                className={`row ${author === "Yo" ? "sent" : "received"}`}
                key={id}
                ref={lastMessageRef}
              >
                <div className="chat-container">
                  <div className="author">{author}</div>
                  <div className="content">{content}</div>
                  <div className="footer">
                    {date}&nbsp;
                    <span className={state === "visto" ? "blue" : ""}>
                      &#10003;&#10003;
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <form onSubmit={(e) => handleSubmit(e, message)}>
          <input
            type="text"
            onChange={handleMessageChanged}
            value={message}
            ref={inputRef}
            placeholder="Escribe un mensaje"
          />
          <button type="submit"><i className="bi bi-send"></i></button>
        </form>
      </div>
  );
};

export default Chat;
