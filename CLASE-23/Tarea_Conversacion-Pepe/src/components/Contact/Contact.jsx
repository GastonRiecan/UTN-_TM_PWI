import "./styles.css";
import { useNavigate } from "react-router-dom";

const Contact = ({ contact }) => {
  const navigate = useNavigate();

  function handleContactSelect() {
    navigate("/chat/" + contact.id);
  }

  return (
    <section className="contact-container" onClick={handleContactSelect}>
      <div className="imageContainer">
        <img
          className="profile-picture"
          src={`/images/${contact.profilePicture}`}
        />
      </div>
      <div className="contact-info">
        <div className="header-info">
          <span>
            <b>{contact.name}</b>
          </span>
          <span>
            {contact.chatHistory[contact.chatHistory.length - 1].date}
          </span>
        </div>
        <p>{contact.chatHistory[contact.chatHistory.length - 1].content}</p>
      </div>
    </section>
  );
};

export default Contact;
