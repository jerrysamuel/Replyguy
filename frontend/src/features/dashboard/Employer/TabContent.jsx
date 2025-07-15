import React from 'react';

const EmployerTabContent = ({ activeTab }) => {
  switch (activeTab) {
    case 'replyguys':
      return <div>List of available Reply Guys for hire</div>;
    case 'contracts':
      return <div>All your contracts with reply guys</div>;
    case 'chats':
      return <div>Chat with reply guys you've hired</div>;
    case 'payments':
      return <div>Payment history and subscription status</div>;
    default:
      return null;
  }
};

export default EmployerTabContent;
