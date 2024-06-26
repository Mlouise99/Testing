import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="flex pr-64">
        <div className="w-1/4"></div>
        <div className="flex-grow bg-red-200 p-4 items-center justify-center ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;
