import data from "../../data/data.js";
import './styles.css'
import  Contact  from "../Contact/Contact.jsx";

const ContactList = () => {
  return (
    <div className="contact-list-container">
      <h1>Contactos</h1>
      {data.map(contact => <Contact contact={contact} key={contact.id} />)}
    </div>
  );
};

export default ContactList;
