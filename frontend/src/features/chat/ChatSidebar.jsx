import React from 'react';
import { Users } from 'lucide-react';

const mockUsers = [
  { id: 1, name: 'Jane Doe' },
  { id: 2, name: 'Samuel Reply' },
  { id: 3, name: 'Client X' },
];

const ChatSidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md p-4 border-r">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Users className="w-5 h-5" />
        Chats
      </h2>
      <ul className="space-y-2">
        {mockUsers.map((user) => (
          <li
            key={user.id}
            className="p-3 rounded-lg hover:bg-orange-100 cursor-pointer transition"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
