import React from 'react';
import MessageInput from './MessageInput';

const mockMessages = [
  { id: 1, text: 'Hey there!', sender: 'you' },
  { id: 2, text: 'Hello! How can I help?', sender: 'them' },
  { id: 3, text: 'I need help engaging my followers.', sender: 'you' },
];

const ChatWindow = () => {
  return (
    <div className="flex-1 flex flex-col justify-between">
      {/* Messages */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50">
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs p-3 rounded-lg ${
              msg.sender === 'you'
                ? 'bg-orange-500 text-white self-end ml-auto'
                : 'bg-gray-200 text-gray-900 self-start mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
