import React from 'react';
import '../Chat.css';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const ChatInput = () => {
  return (
    <section className="chat-input">
      <AddCircleRoundedIcon fontSize="large" />
      <form>
        <input 
        className=""
        placeholder="Message #TESTCHANNEL" 
        type="text"
        name="message" 
        />
        <button 
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
