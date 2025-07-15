import React from 'react';
import ChatSidebar from './ChatSidebar';
import ChatWindow from './ChatWindow';

const ChatContainer = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default ChatContainer;
