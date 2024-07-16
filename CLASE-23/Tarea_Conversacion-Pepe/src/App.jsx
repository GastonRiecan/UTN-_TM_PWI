import React from 'react'
import DATA_MOCK from './data'
import Conversation from './components/conversation/Conversation'

function App() {
  return (
    <Conversation data={DATA_MOCK}/>
  )
}

export default App
