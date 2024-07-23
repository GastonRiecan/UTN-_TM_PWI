import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { getContactInfoById } from "../../helpers/getContactInfoById";

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
    <div>
      <Header contactData={contactData} backURL={`/chat/${contactData.id}`} />
      <div>
        <p>Estado del contacto: Activo</p>
        <p>Ultima conexion: {lastMessageDate}</p>
        <p>Silenciar Notificaciones: <span onClick={handleNotifications}>{showNotifications? '🔔' : '🔕' }</span></p>
      </div>
    </div>
  );
};

export default ContactInfo;
