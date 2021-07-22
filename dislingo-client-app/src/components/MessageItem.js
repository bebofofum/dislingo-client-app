import React from 'react';
import '../Messages.css';
import Avatar from '@material-ui/core/Avatar';



const MessageItem = ({ timestamp, message, user }) => {
  return(
    <section className="message">
      <Avatar src="https://avatars.githubusercontent.com/u/8239774?v=4" />
         <div className="message-contents"> 
          <h4>
            {user.name}
            <span className="message-timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
          </h4>
          <p>{message}</p>
         </div>
    </section>
  )
}

export default MessageItem