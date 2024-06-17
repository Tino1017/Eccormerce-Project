import React from "react";

const ResponsiveHero = () => {
  const images = [
    "https://images.unsplash.com/photo-1604705264674-1c560f9d9d58?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="lg:hidden">
      <div className="w-full bg-black/5  h-12 flex items-center justify-center ">
        <p className="font-medium text-md">
          ALL NEW USERS RECEIVE <span className="underline">30% OFF</span>{" "}
        </p>
      </div>
      <div
        className="relative w-100% h-[77vh] flex flex-col justify-end items-start py-10 px-5"
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundPosition: "center",
          backgroundRepeat: "no repeat",
          backgroundSize: "contain",
        }}
      >
        <h1 className="max-w-xs font-bold text-5xl text-white pb-5">
          Finding The Best Products With Reliability
        </h1>
        <button className="bg-white text-xl px-4 py-1 font-medium rounded-full hover:bg-white/70">
          Shop
        </button>
      </div>
    </div>
  );
};

export default ResponsiveHero;
