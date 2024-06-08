import React from "react";
import {HashLink as Link} from 'react-router-hash-link';


export const SecondaryBtn = ({ btnLink, btnLabel }) => {
  return (
    <>
      <Link
        to={btnLink}
        className="border border-primary py-1 px-3 rounded-2xl text-primary  hover:opacity-70 active:scale-50 duration-500"
      >
        {btnLabel}
      </Link>
    </>
  );
};
