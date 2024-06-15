import React from "react";
import { Navigation } from "../../Components/LandingComponents/Navigation";
import { HashLink as Link } from "react-router-hash-link";
import { Hero } from "./Hero";
import ActiveSlider from "../../Components/LandingComponents/ActiveSlider";
import { ServiceData } from "../../Components/api/constants.index";
import { Sections } from "../../Components/LandingComponents/Sections";
import ResponsiveHero from "./ResponsiveHero";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <div className="lg:px-36">
        <Hero />
        <ResponsiveHero/>
        

      </div>
      <div className="pl-5">
      <Sections 
      heading={'Shop Our Categories'}
      sliderComponent={<ActiveSlider
      array={ServiceData}/>}/>
      <Sections heading={'Best Deals For You'}
      sliderComponent={<ActiveSlider
        array={ServiceData}/>}/>
      </div>
      
      {/* <ActiveSlider
        array={ServiceData} /> */}
    </>
  );
};

export default LandingPage;
