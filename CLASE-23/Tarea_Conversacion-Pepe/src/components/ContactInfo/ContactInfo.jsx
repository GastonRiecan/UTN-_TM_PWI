import React, { useState } from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { getContactInfoById } from "../../helpers/getContactInfoById";
import './styles.css'

const ContactInfo = () => {
  const params = useParams();

  const [showNotifications, setShowNotifications] = useState(true)

  const contactData = getContactInfoById(params.id_contacto);
  
  const notMineMessages = contactData.chatHistory.filter(message => message.author !== 'yo');
  
  const lastMessageDate = notMineMessages[notMineMessages.length-1].date

  function handleNotifications () {
    setShowNotifications(!showNotifications)
  }

  return (
    <div className="contact-info-container">
      <Header contactData={contactData} backURL={`/chat/${contactData.id}`} />
      <div className="contact-info-data">
        <section className="status">
          <span>Estado del contacto:</span> 
          <span><i>Activo</i></span>
        </section>
        <section className="status">
          <span>Última conexión:</span> 
          <span><i>{lastMessageDate}</i></span>
        </section>
        <section className="status clickable" onClick={handleNotifications}>
          <span>Silenciar Notificaciones:</span> <span className="bell" >{showNotifications? '🔔' : '🔕' }</span>
        </section>
      </div>
    </div>
  );
};

export default ContactInfo;
