import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation } from '../../containers/Public';

const Home = () => {
  return (
    <div className=" w-full flex flex-col items-center h-full">
      <Header />
      <Navigation />
      <div className="w-3/4 mt-3 flex flex-col items-start justify-start">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
