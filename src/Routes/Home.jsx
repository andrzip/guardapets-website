import React from "react";

import HeroSection from '../Components/Home/Hero/index';
import AboutSection from '../Components/Home/About/index';
import AnimalsSection from '../Components/Home/Animals/index';
import TipsSection from '../Components/Home/Tips/index';
import FooterSection from '../Components/Home/Footer/index';

const Home = () => {
    return (
        <>
        <HeroSection />
        <AboutSection />
        <AnimalsSection />
        <TipsSection />
        <FooterSection />
      </>
    )
}

export default Home;