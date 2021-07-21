import React from 'react';
import { useSelector } from 'react-redux';
import '../Chat.css';

import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

import { selectChannelId, selectChannelName } from '../features/appSlice';
import { selectUser } from '../features/userSlice';


const ChatPanel = () => {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const user = useSelector(selectUser);



  return (
    <section className="chat-panel">
      <ChatHeader channelName={channelName} />
      <ChatMessages />    
      <ChatInput channelId={channelId} channelName={channelName} />

    </section>
  )
}

export default ChatPanel
