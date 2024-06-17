import React from "react";
import { Navigation } from "../../Components/LandingComponents/Navigation";
import { HashLink as Link } from "react-router-hash-link";
import { Hero } from "./Hero";
import ActiveSlider from "../../Components/LandingComponents/ActiveSlider";
import { ServiceData } from "../../Components/api/constants.index";
import { Sections } from "../../Components/LandingComponents/Sections";
import ResponsiveHero from "./ResponsiveHero";
import { Footer } from "./Footer";
import { Popular } from "../../Components/api/Popular.index";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <div className="lg:px-36">
        <Hero />
        <ResponsiveHero />
      </div>
      <div className="pl-5">
        <Sections
          heading={"Shop Our Categories"}
          sliderComponent={<ActiveSlider array={ServiceData} />}
        />

        <Sections
          heading={"Popular Products"}
          sliderComponent={<ActiveSlider array={Popular} />}
        />
        <Sections
          heading={"Best Deals For You"}
          sliderComponent={<ActiveSlider array={ServiceData} />}
        />
        <Sections
          heading={"Choose By Shops"}
          sliderComponent={<ActiveSlider array={ServiceData} />}
        />

        <Sections
          heading={"Featured Products"}
          sliderComponent={<ActiveSlider array={ServiceData} />}
        />
      </div>

      <Footer />

      {/* <ActiveSlider
        array={ServiceData} /> */}
    </>
  );
};

export default LandingPage;
