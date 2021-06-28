import React from 'react';
import '../Chat.css';
import ChatMessageItem from './MessageItem';

const ChatMessages  = () => {
  return(
    <section className="chat-area">
      <div className="chat-messages">
        <ChatMessageItem />
        <ChatMessageItem />
      </div>

    </section>
  )
}

export default ChatMessages