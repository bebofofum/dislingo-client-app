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
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';


const Sidebar = () => {
  const user = useSelector(selectUser);

  const onHandleClick = () => {
    auth.signOut()
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

