import React, { useState } from "react";
import { PrimaryBtn } from "../../UI/PrimaryBtn";
import { SecondaryBtn } from "../../UI/SecondaryBtn";
import logo from '../../Pages/Landing/Assets/logo.svg'
import { RiMenu3Line } from "react-icons/ri";
import responsive from '../../Pages/Landing/Assets/responsive.svg'


export const Navigation = () => {
  const [menuClicked, setMenuClicked] = useState();
  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
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
  const primaryBtn = ["Sign In", "/"];
  const secondaryBtn = ["Sign Up", "Create-Account"];
  return (
    <>
      <div className="hidden lg:flex lg:items-center lg:max-w-7xl lg:mx-auto lg:justify-evenly mt-2">
        <div>
          <img src={logo} alt="" />
        </div>
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
      <div>
      <div className={!menuClicked ?"lg:hidden flex justify-between items-center px-5 pt-2 bg-transparent hidden" : 'hidden'}><img src={logo} width={150} alt=""/><button onClick={handleMenuClick}><RiMenu3Line fontSize={24} color="gray"/></button></div>
        <img src={responsive} className='' style={{borderBottomLeftRadius:'90px',borderBottomRightRadius:'90px'}} alt="" /></div>
      
      <div className={menuClicked?'h-[100vh] w-full fixed top-0 left-0 items-center z-10 space-y-5 pt-5 bg-white ':'hidden'}>
        <div className="flex flex-col items-center ">
          {navigationObject.map((props, index) => (
            <a className="my-5" href={props.navLink} key={index}>
              {props.navLabel}
            </a>
          ))}
        </div>
        <div className="flex gap-x-10 justify-center">
          <PrimaryBtn btnLabel={primaryBtn[0]} btnLink={primaryBtn[1]} />
          <SecondaryBtn btnLabel={secondaryBtn[0]} btnLink={secondaryBtn[1]} />
        </div>
      </div>
      <div className="hidden lg:block border border-x-0 border-t-0 border-b-1 pb-2 shadow-sm"></div>
    </>
  );
};
