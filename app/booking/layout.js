import React from 'react';
import Sidebar from '@components/Sidebar';
const layout = ({ children }) => {
  return (
    <div className="flex w-[100%] h-[830px]">
      <Sidebar />
      <div className="w-[80%] bg-primary">{children}</div>
    </div>
  );
};

export default layout;
