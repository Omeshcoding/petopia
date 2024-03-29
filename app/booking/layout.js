import React from 'react';
import Sidebar from '@components/Sidebar';
const layout = ({ children }) => {
  const service = {
    title: 'All services include:',
    type: [
      {
        id: 1,
        title: 'A photo update for you along',
      },
      {
        id: 2,
        title: 'Notification of sitter arrival',
      },
      {
        id: 3,
        title: 'Treats for your pet, with your',
      },
    ],
  };
  return (
    <div className="flex w-[100%] h-[830px]">
      <Sidebar {...service} />
      <div className="w-[80%] bg-primary">{children}</div>
    </div>
  );
};

export default layout;
