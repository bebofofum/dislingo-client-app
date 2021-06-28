import React from 'react';
import '../Chatheader.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';



const ChatHeaderSearch = () => {
  return (
    <div className="chat-header-search">
      <input placeholder="Search" />
      <SearchRoundedIcon />
    </div>

  )
}

export default ChatHeaderSearch