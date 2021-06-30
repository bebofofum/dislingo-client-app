import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Sidebar from './components/Sidebar';
import ChatPanel from './components/ChatPanel';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser); //this is a hook. equivalent to mapstatetoprops and connect

  function checkUserRender() {
    return user ? (
      <>
       <Sidebar /> 
       <ChatPanel />
      </>
    ) : (
      <h2>You need to login</h2>
    )
  }

 

  return (
    <div className="app">
     {checkUserRender()}
    </div>
  );
}

export default App;
