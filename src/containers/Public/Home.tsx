import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation } from '../../containers/Public';

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center h-full">
      <Header />
      <Navigation />
      <div className="w-1100 border border-red-500 mt-3 flex flex-col items-center justify-start">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
