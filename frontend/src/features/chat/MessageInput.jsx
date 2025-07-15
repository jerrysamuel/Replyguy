import React, { useState } from 'react';
import { Send } from 'lucide-react';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('Send message:', message);
      setMessage('');
    }
  };

  return (
    <div className="p-4 bg-white border-t flex items-center gap-2">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
};

export default MessageInput;
