import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation } from '../../containers/Public';
import WhyUs from './WhyUs';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <div className=" w-full flex flex-col items-center h-full">
      <Header />
      <Navigation />
      <div className="w-3/4 mt-3 flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <WhyUs />
      <ContactUs />
    </div>
  );
};

export default Home;
