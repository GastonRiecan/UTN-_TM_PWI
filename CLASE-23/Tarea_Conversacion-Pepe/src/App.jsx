import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contacts from './pages/Contacts/Contacts'
import Chats from './pages/Chats/Chats'
import ContactInfo from './pages/ContactInfo/ContactInfo'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Contacts />} />
      <Route path='/chat/:chat_id' element={<Chats />} />
      <Route path='/chat/:chat_id/info' element={<ContactInfo />} />
    </Routes>
  )
}

export default App
