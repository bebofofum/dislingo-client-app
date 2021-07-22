import React, { useState, useEffect } from 'react';
import '../Chat.css';
import ChatMessageItem from './MessageItem';
import database from "../firebase";

const ChatMessages  = ({ channelId }) => {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (channelId) {
      database.collection('channels')
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
    }  
  }, [channelId]);
  


  return(

 
    <section className="chat-area">
      <div className="chat-messages">
        {messages.map((message) => (
          <ChatMessageItem user={message.user} message={message.message} timestamp={message.timestamp} />
        ))}
      </div>

    </section>
  )
}

export default ChatMessages