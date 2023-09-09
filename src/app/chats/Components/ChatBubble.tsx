import React from 'react';

const ChatBubble = (props) => {
  const bubbleClass = !props.sender ? 'sender' : 'receiver';

  // Calculate bubble width based on the message length
  const messageLength = props.message.length;
  const minBubbleWidth = 10; // Minimum bubble width
  const maxBubbleWidth = 300; // Maximum bubble width
  const bubbleWidth = Math.min(
    minBubbleWidth + messageLength * 10, // Adjust the multiplier as needed
    maxBubbleWidth
  );

  return (
    <div
      className={`p-3 rounded-xl m-2 break-words text-sm text-justify ${
        bubbleClass === 'sender' ? 'bg-blue-400 float-right' : 'bg-gray-200 float-left'
      }`}
      style={{ width: `${bubbleWidth}px` }}
    >
      <p className={`text-black`}>
        {props.message}
      </p>
    </div>
  );
};

export default ChatBubble;
