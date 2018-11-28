import React, { Component } from 'react';
import ChatMessage from './ChatMessage';

const ChatLog= (props) => {

    const messages = props.messages.map((message) => {
      return (<ChatMessage
                sender={message.sender}
                body={message.body}
                time={message.timeStamp} />);
    });

    return (
      <section className="chat-log">
        {messages}
      </section>
    );
  }


export default ChatLog;
