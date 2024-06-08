import React from "react";
import { SquarePrimaryBtn } from "../../UI/SquarePrimaryBtn";
import fail from './Assets/fail.svg';

export const VerificationFail = () => {
  const tryAgainBtn = ["Try Again", "/Email-Verification"];
  

  return (
    <div
      
      className="relative flex h-[95vh] items-center justify-center "
    id="verification-fail">
      <div className="relative z-[1] flex flex-col mx-auto text-center px-4 py-12 shadow-lg space-y-5 bg-white/65 rounded-lg">
        <h1 className="text-3xl font-medium mb-5">Email Verified</h1>
        <div className="flex justify-center py-3">
          <img src={fail} alt="" />
        </div>
        <div>
          <p className="font-semibold max-w-xs pb-2">
           Your Email Address verification has failed
          </p>
        </div>

        <SquarePrimaryBtn btnLabel={tryAgainBtn[0]} btnLink={tryAgainBtn[1]} />
        
      </div>
      <div className="absolute top-3 left-4 z-0 bg-primary w-[180px] h-[180px] rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-30 right-0 bg-primary w-[240px] h-[240px] rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 bg-primary w-24 h-24 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 bg-primary w-[150px] h-[150px] rounded-full blur-3xl opacity-60"></div>
    </div>
  );
};

