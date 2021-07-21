import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import "../Sidebar.css";
import SidebarChannelList from './SidebarChannelList';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

import { selectUser } from '../features/userSlice';
import database, { auth } from '../firebase';


const Sidebar = () => {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([])

  useEffect(() => { //setChannels is the function that sets the value for channels from useState
    database.collection('channels').onSnapshot(response => {
      let channelCollect = response.docs.map(eachRes => ({
        id: eachRes.id,
        channel: eachRes.data()}));
      setChannels(channelCollect)
      console.log(channelCollect)
    }  
      )
  }, [])

  const onHandleClick = () => {
    auth.signOut()
  }

  const onHandleAddChannel = () => {
    const newChannelName = prompt('Enter a Channel Name'); //I think I can later add a prompt styled compoent here rather than an generic prompt

    if (newChannelName) {
      database.collection('channels').add({
         channelName: newChannelName
      })
    }

  }

  return (
    <section 
    className="sidebar">

      <div className="sidebar-top">
        <h3>The Forge</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar-channels">
        <div className="sidebar-channels-header">
          <div className="sidebar-header">
            <ExpandMoreIcon />
            <h4>Text Channel</h4>
          </div>
          <AddIcon onClick={onHandleAddChannel} className="sidebar-addchannel" />
        </div>
        <div className="sidebar-channellist">
          {channels.map(({ id, channel }) => 
              <SidebarChannelList 
              key={id} 
              id={id} 
              channelName={channel.channelName} />
          )}
        </div> 
      </div>
      <div className="sidebar-voice">
        <SignalCellularAltIcon 
        className="sidebar-cell-voice-icon"
        fontSize="large" />

        <div 
        className="sidebar-voice-notice">
         <h3>Voice Connected</h3>
         <p>Stream</p>
        </div>

        <div 
        className="sidebar-voice-icons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>

      </div>

      <div 
      className="sidebar-profile">
        <Avatar onClick={onHandleClick} src={user.photo} />
        <div className="sidebar-profile-details">
          <h3>{user.name}</h3>
          <p>#{user.uid.substring(0,5)}</p>
        </div>
        <div className="sidebar-profile-icons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
     
      
      
      
    </section>
  )
}

export default Sidebar;

