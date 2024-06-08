import React, { useState } from "react";
import { PrimaryBtn } from "../UI/PrimaryBtn";
import { SecondaryBtn } from "../UI/SecondaryBtn";


export const Navigation = () => {
    const [menuClicked,setMenuClicked]=useState();
    const handleMenuClick = () => { 
        setMenuClicked(!menuClicked)
     };



  const navigationObject = [
    {
      navLabel: "Home",
      navLink: "",
    },
    {
      navLabel: "Shop Online",
      navLink: "",
    },
    {
      navLabel: "What's New",
      navLink: "",
    },
    {
      navLabel: "Contact",
      navLink: "",
    },
    {
      navLabel: "About",
      navLink: "",
    },
  ];
  const primaryBtn = ["Sign In", "#"];
  const secondaryBtn = ["Sign Up", "##"];
  return (
    <>
      <div className="hidden lg:flex lg:items-center lg:max-w-5xl lg:mx-auto lg:justify-evenly border border-x-0 border-t-0 border-b-2 pb-2">
        <div>logo</div>
        <div>
          {navigationObject.map((props, index) => (  
            <a className="mr-14" key={index} href={props.navLink}>
              {props.navLabel}
            </a>
          ))}
        </div>
        <div className="flex space-x-5">
          <a
            href=""
            className="bg-primary py-1 px-3 text-white  rounded-2xl hover:opacity-70 active:scale-50 duration-500"
          >
            Sign Up
          </a>
          <a
            href=""
            className="border border-primary py-1 px-3 rounded-2xl text-primary  hover:opacity-70 active:scale-50 duration-500"
          >
            Sign In
          </a>
        </div>
      </div>
      {/* Responsive */}
      <div className="hidden">
        <div className="flex flex-col items-center ">
          {navigationObject.map((props, index) => (
            <a className="my-5" href={props.navLink} key={index}>
              {props.navLabel}
            </a>
          ))}
        </div>
        <div className="flex gap-10 justify-center">
          <PrimaryBtn btnLabel={primaryBtn[0]} btnLink={primaryBtn[1]} />
          <SecondaryBtn btnLabel={secondaryBtn[0]} btnLink={secondaryBtn[1]} />
        </div>
      </div>
    </>
  );
};
