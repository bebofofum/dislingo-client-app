import React from 'react';
import '../Chat.css';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';


const ChatPanel = () => {
  return (
    <section className="chat-panel">
      <ChatHeader />
      <ChatMessages />    
      <ChatInput />

    </section>
  )
}

export default ChatPanel
