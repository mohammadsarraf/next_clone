import React from 'react';
import './ChatBubble.css'; // Make sure to create this CSS file

const ChatBubble = (props: any) => {
  const bubbleClass = props.sender ? 'sender' : 'receiver';
  const bubbleStyle = props.sent ? 'sent' : 'received';

  return (
    <div className={`chat-bubble ${bubbleClass} ${bubbleStyle}`}>
      <p>{props.message}</p>
    </div>
  );
};


export default ChatBubble;
