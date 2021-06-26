import React from 'react';
import "../SidebarChannel.css";


const SidebarChannel = ({ id, channel }) => {  //passing props to SidebarChannel from parent, destructuring here
  return (
    <section className="sidebar-channel">
      <h4>
        <span className="sidebar-channel-hash">#</span>
        Side Bar channel</h4>
    </section>
  )
}

export default SidebarChannel