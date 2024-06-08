import React from "react";

export const SecondaryBtn = ({ btnLink, btnLabel }) => {
  return (
    <>
      <a
        href={btnLink}
        className="border border-primary py-1 px-3 rounded-2xl text-primary  hover:opacity-70 active:scale-50 duration-500"
      >
        {btnLabel}
      </a>
    </>
  );
};
