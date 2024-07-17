import React from "react";
import { Link } from "react-router-dom";

const contacts = [
  {
    id: 1,
    name: "Lala",
    lastMessage: "Hola como te va?",
    date: "ayer",
    profilePicture: "Lala.jpg",
  },
  {
    id: 2,
    name: "Pocho",
    lastMessage: "¿Qué tal todo?",
    date: "12:08",
    profilePicture: "Pocho.jpg",
  },
  {
    id: 3,
    name: "Maria",
    lastMessage: "Nos vemos mañana.",
    date: "hace 2 dias",
    profilePicture: "Maria.jpg",
  },
  {
    id: 4,
    name: "Juan",
    lastMessage: "Estoy en camino.",
    date: "16:09",
    profilePicture: "Juan.jpg",
  },
];

const ContactList = () => {
  return (
    <div>
      <h1>Contactos</h1>
      {contacts.map((contact) => (
        <section key={contact.id} style={{border: '1px solid grey', borderRadius: '10px', margin: '4px', padding: '5px'}}>
          <Link to={"/chat/" + contact.id} style={{display: 'flex'}}>
            <img src={`/images/${contact.profilePicture}`} style={{width: '30px', borderRadius: "50%"}} />
            <div>
              <h4>{contact.name}</h4>
              <p>{contact.lastMessage}</p>
              <span>{contact.date}</span>
            </div>
          </Link>
        </section>
      ))}
    </div>
  );
};

export default ContactList;
