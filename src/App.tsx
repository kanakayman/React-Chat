import { useState } from 'react';
import List from './Components/list/List';
import Chat from './Components/chat/Chat';
import Detail from './Components/detail/Detail';

function App() {
  

  return (
    <>
      <div className='container'>
        <List />
        <Chat />
        <Detail />
      </div>
    </>
  )
}

export default App
