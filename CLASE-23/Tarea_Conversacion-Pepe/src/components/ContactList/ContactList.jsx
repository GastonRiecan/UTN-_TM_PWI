import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.js";

const ContactList = () => {
  return (
    <div>
      <h1>Contactos</h1>
      {data.map((contact) => (
        <section key={contact.id} style={{border: '1px solid grey', borderRadius: '10px', margin: '4px', padding: '5px'}}>
          <Link to={"/chat/" + contact.id} style={{display: 'flex'}}>
            <img src={`/images/${contact.profilePicture}`} style={{width: '30px', borderRadius: "50%"}} />
            <div>
              <h4>{contact.name}</h4>
              <p>{contact.chatHistory[contact.chatHistory.length - 1].content}</p>
              <span>{contact.chatHistory[contact.chatHistory.length - 1].date}</span>
            </div>
          </Link>
        </section>
      ))}
    </div>
  );
};

export default ContactList;
