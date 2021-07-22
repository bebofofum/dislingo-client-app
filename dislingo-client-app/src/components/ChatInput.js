import React, { useState } from 'react';


import '../Chat.css';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import database from "../firebase";
import firebase from 'firebase';



const ChatInput = ({ user, channelId, channelName }) => {
  const [input, setInput] = useState("");


  const handleOnChange = (e) => setInput(e.target.value)

  const handleSubmitSendMessage = (e) => {
    e.preventDefault();

    database.collection('channels').doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });

    setInput("");
  }


  return (
    <section className="chat-input">
      <AddCircleRoundedIcon fontSize="large" />
      <form>
        <input 
        className=""
        disabled={!channelId}
        onChange={handleOnChange}
        placeholder={`Message #${channelName}`} 
        type="text"
        name="message" 
        value={input}
        />
        <button 
        disabled={!channelId}
        onClick={handleSubmitSendMessage}

        className="chat-input-submit-button"
        type="submit">Send Message</button>
      </form>
      <div className="chat-input-icons">
        <CardGiftcardIcon />
        <GifIcon />
        <EmojiEmotionsIcon />

      </div>

    </section>
  )
}

export default ChatInput
