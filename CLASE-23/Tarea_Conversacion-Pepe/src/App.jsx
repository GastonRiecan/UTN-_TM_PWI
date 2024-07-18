import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contacts from './pages/Contacts/Contacts'
import Chats from './pages/Chats/Chats'
import ContactInfo from './pages/ContactInfo/ContactInfo'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Contacts />} />
      <Route path='/chat/:id_contacto' element={<Chats />} />
      <Route path='/info/:id_contacto' element={<ContactInfo />} />
    </Routes>
  )
}

export default App
