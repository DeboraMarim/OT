// Home.js
import React, { useState } from 'react';
import CoverSection from '../components/CoverSection';
import InfoSection from '../components/InfoSection';
import { aboutObj, signupObj } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Techs from '../components/Services/indexTechs';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <CoverSection />
      <InfoSection {...aboutObj} />
      <Services />
      <Techs />
      <InfoSection {...signupObj} />

    </>
  );
};

export default Home;
