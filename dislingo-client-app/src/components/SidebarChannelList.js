import React from 'react';
import "../SidebarChannel.css";


const SidebarChannelList = ({ id, channelName }) => {  //passing props to SidebarChannel from parent, destructuring here
  return (
    <section className="sidebar-channel">
      <h4>
        <span className="sidebar-channel-hash">#</span>
        {channelName}</h4>
    </section>
  )
}

export default SidebarChannelList