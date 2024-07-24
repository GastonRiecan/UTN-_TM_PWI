import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Chats from "./pages/Chats/Chats";
import ContactsInfo from "./pages/ContactsInfo/ContactsInfo";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/chat/:id_contacto" element={<Chats />} />
        <Route path="/info/:id_contacto" element={<ContactsInfo />} />
      </Routes>
    </main>
  );
}

export default App;
