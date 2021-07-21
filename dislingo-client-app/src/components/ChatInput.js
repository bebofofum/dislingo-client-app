import React, { useState } from 'react';
import '../Chat.css';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const ChatInput = ({ channelId, channelName }) => {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => setInput(e.target.value)


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
