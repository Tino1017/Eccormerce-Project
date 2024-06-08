import React from "react";
import { SquarePrimaryBtn } from "../../UI/SquarePrimaryBtn";

import { TransparentBtn } from "../../UI/TransparentBtn";
import { IoIosArrowBack } from "react-icons/io";
import Email from "./Assets/Email.svg";

export const EmailVerification = () => {
  const submitBtn = ["Submit", "/Email-Verified"];
  const backBtn = ["Back", "/Create-Account"];
  const userEmail = "tmagobeya1@gmail.com";

  return (
    <form
      action="submit"
      id="email-verification"
      className="relative flex h-[95vh] items-center justify-center "
    >
      <div className="relative z-[1] flex flex-col mx-auto text-center px-5 py-12 shadow-lg space-y-5 bg-white/65 rounded-lg">
        <h1 className="text-3xl font-medium mb-5">Email Verification</h1>
        <div className="flex justify-center py-3">
          <img src={Email} alt="" />
        </div>
        <div>
          <p className="font-semibold">
            Enter the 6 Digits Code you received to
          </p>
          <p className="font-semibold text-primary">{userEmail}</p>
        </div>

        <input
          type="text"
          placeholder="6 Digits Code"
          className="bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none"
          required
        />

        <SquarePrimaryBtn btnLabel={submitBtn[0]} btnLink={submitBtn[1]} />
        <div className="flex justify-center items-center gap-x-2 text-primary">
          <IoIosArrowBack fontWeight={"bold"} />
          <TransparentBtn btnLabel={backBtn[0]} btnLink={backBtn[1]} />
        </div>
      </div>
      <div className="absolute top-3 left-4 z-0 bg-primary w-[180px] h-[180px] rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-30 right-0 bg-primary w-[240px] h-[240px] rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 bg-primary w-24 h-24 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 bg-primary w-[150px] h-[150px] rounded-full blur-3xl opacity-60"></div>
    </form>
  );
};
