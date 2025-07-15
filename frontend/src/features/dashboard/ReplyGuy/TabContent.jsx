import React from 'react';

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case 'hires':
      return <div>You’ve been hired by 3 employers recently</div>;
    case 'contracts':
      return <div>Active contracts listed here</div>;
    case 'chats':
      return <div>Chat window or messages here</div>;
    default:
      return null;
  }
};

export default TabContent;