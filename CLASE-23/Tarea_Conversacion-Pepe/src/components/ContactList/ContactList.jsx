import data from "../../data/data.js";
import './styles.css'
import  Contact  from "../Contact/Contact.jsx";
import Header from "../Header/Header.jsx";

const ContactList = () => {
  const myData = {
    profilePicture: "Gaston.jpg",
    name: ""
  }

  return (
    <div className="contact-list-container">
      <Header contactData={myData} />
      {data.map(contact => <Contact contact={contact} key={contact.id} />)}
    </div>
  );
};

export default ContactList;
