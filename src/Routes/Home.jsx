import React from "react";

import HeroSection from '../Components/Home/Hero/index';
import AboutSection from '../Components/Home/About/index';
import AnimalsSection from '../Components/Home/Animals/index';
import Tips from '../Components/Home/Tips/Tips';
import Footer from '../Components/Home/Footer/Footer';

const Home = () => {
    return (
        <>
        <HeroSection />
        <AboutSection />
        <AnimalsSection />
        <Tips />
        <Footer />
      </>
    )
}

export default Home;