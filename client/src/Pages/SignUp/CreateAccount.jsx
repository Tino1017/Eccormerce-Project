import React from "react";
import { SquarePrimaryBtn } from "../../UI/SquarePrimaryBtn";

export const CreateAccount = () => {
  const continueBtn = ["Continue", "/Email-Verification"];

  return (
    <>
      <form
        action="submit"
        id="create-account"
        className="relative flex h-[95vh] items-center justify-center "
      >
        <div className="relative z-[1] flex flex-col mx-auto text-center px-8 py-16 shadow-lg space-y-5 bg-white/65 rounded-lg">
          <h1 className="text-3xl font-medium mb-5">Create Account</h1>
          <div className="flex justify-center space-x-5 text-xs font-semibold pb-3">
            <button>Customer Account</button>
            <button>Shopper Account</button>
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none"
            required
          />
          <input
            type="password"
            placeholder="Create Password"
            className="bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-transparent border-[1.5px] rounded-lg p-2 border-gray-500  outline-none"
            required
          />
          <SquarePrimaryBtn
            btnLabel={continueBtn[0]}
            btnLink={continueBtn[1]}
          />
        </div>
        <div className="absolute top-3 left-4 z-0 bg-primary w-[180px] h-[180px] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-30 right-0 bg-primary w-[240px] h-[240px] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 bg-primary w-24 h-24 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-primary w-[150px] h-[150px] rounded-full blur-3xl opacity-60"></div>
      </form>
    </>
  );
};
