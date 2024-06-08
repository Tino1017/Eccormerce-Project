import React from "react";

export const PrimaryBtn = ({btnLabel,btnLink}) => {
  return (
    <>
      <a
        href={btnLink}
        className="bg-primary py-1 px-3 text-white  rounded-2xl hover:opacity-70 active:scale-50 duration-500"
      >
    {btnLabel}
      </a>
    </>
  );
};
