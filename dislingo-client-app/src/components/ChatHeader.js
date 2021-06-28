import React from 'react';
import '../Chatheader.css';
import ChatHeaderSearch from './ChatHeaderSearch';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

const ChatHeader = () => {
  return (
    <section className="chat-header">
      <div className="chat-header-left">
        <h3>
          <span className="chat-header-hashtag">
            #
          </span>
          Test Channel Name
        </h3>

      </div>
      <div className="chat-header-right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <ChatHeaderSearch />

        <SendRoundedIcon />
        <HelpRoundedIcon />

      </div>

    </section>
  )
}

export default ChatHeader