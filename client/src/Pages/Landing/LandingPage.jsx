import React from "react";
import { Navigation} from '../../Components/LandingComponents/Navigation'
import { HashLink as Link } from "react-router-hash-link";
import { Hero } from "./Hero";


const LandingPage = () => {
  return (
    <>
      <Navigation />
      <div className="lg:px-36">
        <Hero />
       
      </div>
    </>
  );
};

export default LandingPage;
