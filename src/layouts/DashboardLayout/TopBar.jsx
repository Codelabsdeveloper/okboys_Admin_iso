/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Layout} from 'antd';

const {Header} = Layout;

function TopBar() {
  return (
    <Header className="fixed z-10 w-full flex items-center bg-primary">
      <div className='flex flex-row space-x-4 text-white font-bold'>
        <div className='hover:underline cursor-pointer'>Home</div>
        <div className='hover:underline cursor-pointer'>Serices</div>
        <div className='hover:underline cursor-pointer'>Add</div>
        <div className='hover:underline cursor-pointer'>Remove</div>
      </div>
    </Header>
  );
}

export default TopBar;
