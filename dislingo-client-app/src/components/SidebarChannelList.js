import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelDetails } from '../features/appSlice';
import "../SidebarChannel.css";


const SidebarChannelList = ({ id, channelName }) => {  //passing props to SidebarChannel from parent, destructuring here
  const dispatch = useDispatch();

  return (
    <section className="sidebar-channel">
      <h4 
        onClick={() => 
          dispatch(
            setChannelDetails( {
              channelId: id,
              channelName: channelName
          } ))}
      >
        <span className="sidebar-channel-hash">#</span>
        {channelName}</h4>
    </section>
  )
}

export default SidebarChannelList