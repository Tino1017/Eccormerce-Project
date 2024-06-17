import React from "react";
import logo from '../Landing/Assets/logo.svg';
import { PrimaryBtn } from "../../UI/PrimaryBtn";

export const Footer = () => {
    const categories = []

    for (let i = 1; i <= 6; i++) {
      const categoryString = `Categories ${i}`;
      categories.push(categoryString);
    }

 
  const footerData = {
    pages: [
      "Home",
      "Shop Online",
      "Contact Us",
      "Whats New",
      "Most Popular",
      "Best Selling",
    ],
    contactInformation: {
      contactText: "",
      email: "info@sanakin.ik",
      number: "+011 2 345 678",
    },
  };

  return (
    <>
      <footer className="flex flex-col items-start justify-center pl-7 gap-y-5">
        
        <div><img src={logo} alt="" /></div>

        <div className="flex gap-x-10">
        <div>{footerData.pages.map((props,index)=>(
            <p key={index}>{props}</p>
        ))}</div>
        <div>{categories.map((props,index)=>(
            <p key={index}>{props}</p>
        ))}</div>
        </div>

        <div className="">
            <h1>News Letter Subscription</h1>
            <p className="max-w-[250px]">Get the latest products and best deals in your inbox as first person</p>
            <div>
                <input type="text" placeholder="Email Adress" />
                <PrimaryBtn btnLabel={'Submit'}/>

            </div>
        </div>
        
        <div>
            <h1>Contact Us</h1>
            <p>{footerData.contactInformation.contactText}</p>
            <p>{footerData.contactInformation.email}</p>
            <p>{footerData.contactInformation.number}</p>
        </div>

      </footer>
    </>
  );
};
