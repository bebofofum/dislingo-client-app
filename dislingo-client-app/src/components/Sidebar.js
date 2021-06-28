import React from 'react';
import "../Sidebar.css";
import SidebarChannelListItem from './SidebarChannel'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';


const Sidebar = () => {
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
          <AddIcon className="sidebar-addchannel" />
        </div>
        <div className="sidebar-channellist">
        <SidebarChannelListItem />
        <SidebarChannelListItem />
        <SidebarChannelListItem />
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
        <Avatar src="https://avatars.githubusercontent.com/u/8239774?v=4" />
        <div className="sidebar-profile-details">
          <h3>Mantlebeard</h3>
          <p>#idtagname</p>
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

