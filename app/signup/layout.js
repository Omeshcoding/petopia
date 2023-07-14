import React from 'react';
import Sidebar from '@components/Sidebar';
const layout = ({ children }) => {
  const service = {
    title: 'Why our service?',
    type: [
      {
        id: 1,
        title: "We're animal lovers",
      },
      {
        id: 2,
        title: 'Powered by tech',
      },
      {
        id: 3,
        title: 'Update and pics for every',
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
