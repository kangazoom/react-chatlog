import React, { Component } from 'react';
import Timestamp from './Timestamp';


const ChatMessage = (props) => {

  const messageClass = "chat-entry " + (props.sender === 'Vladimir' ? 'local': 'remote')

    return (

      <article className={messageClass}>
        <h2 className="entry-name">{props.sender}</h2>
        <div className="entry-bubble">
        <p className="entry-body">{props.body}</p>
        <p className="entry-time">
          <Timestamp time={props.time} />
        </p>
              </div>
      </article>

    );

}

export default ChatMessage;
