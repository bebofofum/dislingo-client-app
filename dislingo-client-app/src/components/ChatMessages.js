import React, { useState } from 'react';
import '../Chat.css';
import ChatMessageItem from './MessageItem';

const ChatMessages  = () => {

  const [messages, setMessages] = useState([])


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