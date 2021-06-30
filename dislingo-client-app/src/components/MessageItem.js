import React from 'react';
import '../Messages.css';
import Avatar from '@material-ui/core/Avatar';



const MessageItem = () => {
  return(
    <section className="message">
      <Avatar src="https://avatars.githubusercontent.com/u/8239774?v=4" />
         <div className="message-contents"> 
          <h4>
            UserName
            <span className="message-timestamp">timestamp</span>
          </h4>
          <p>This is the message</p>
         </div>
    </section>
  )
}

export default MessageItem