import React from 'react';
import Sidebar from '@components/Sidebar';

const layout = ({ children }) => {
  return (
    <div className="flex w-[100vw]">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default layout;
