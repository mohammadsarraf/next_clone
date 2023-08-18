import React from 'react';
import './ChatBubble.css'; // Make sure to create this CSS file

const ChatBubble = ({ message, sender, sent }) => {
  const bubbleClass = sender ? 'sender' : 'receiver';
  const bubbleStyle = sent ? 'sent' : 'received';

  return (
    <div className={`chat-bubble ${bubbleClass} ${bubbleStyle}`}>
      <p>{message}</p>
    </div>
  );
};


export default ChatBubble;
