import React from "react";

export const SquarePrimaryBtn = ({btnLabel,btnLink}) => {
  return (
    <>
      <a
        href={btnLink}
        className="bg-primary py-2 px-24 text-white  rounded-lg  hover:opacity-70 active:scale-50 duration-500"
      >
    {btnLabel}
      </a>
    </>
  );
};
