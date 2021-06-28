import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ChatPanel from './components/ChatPanel';

function App() {
  return (
    <div className="app">
      {/* Sidebar component */}
      <Sidebar />    

      {/* Sidebar component */}
      <ChatPanel />
  
    </div>
  );
}

export default App;
