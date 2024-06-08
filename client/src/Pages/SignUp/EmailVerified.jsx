import React from "react";
import { SquarePrimaryBtn } from "../../UI/SquarePrimaryBtn";
import { TransparentBtn } from "../../UI/TransparentBtn";
import tick from './Assets/tick.svg';

export const EmailVerified = () => {
  const homeBtn = ["Go To Home", "#"];
  const signInBtn = ["Sign In", "#"];

  return (
    <div
      
      className="relative flex h-[95vh] items-center justify-center "
    >
      <div className="relative z-[1] flex flex-col mx-auto text-center px-5 py-12 shadow-lg space-y-5 bg-white/65 rounded-lg">
        <h1 className="text-4xl font-medium mb-5">Email Verified</h1>
        <div className="flex justify-center py-3">
          <img src={tick} alt="" />
        </div>
        <div>
          <p className="font-semibold max-w-xs pb-2">
            Your Email Address has been verified to the Sanakin.ik
          </p>
        </div>

        <SquarePrimaryBtn btnLabel={homeBtn[0]} btnLink={homeBtn[1]} />
        <div className="flex justify-center items-center gap-x-2 text-primary">
        
          <TransparentBtn btnLabel={signInBtn[0]} btnLink={signInBtn[1]} />
        </div>
      </div>
      <div className="absolute top-3 left-4 z-0 bg-primary w-[180px] h-[180px] rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-30 right-0 bg-primary w-[240px] h-[240px] rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 bg-primary w-24 h-24 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 bg-primary w-[150px] h-[150px] rounded-full blur-3xl opacity-60"></div>
    </div>
  );
};
