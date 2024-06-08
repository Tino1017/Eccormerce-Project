import React from "react";
import {HashLink as Link} from 'react-router-hash-link';

export const SquarePrimaryBtn = ({btnLabel,btnLink}) => {
  return (
    <>
      <Link
        to={btnLink}
        className="bg-primary py-2 px-24 text-white  rounded-lg  hover:opacity-70 active:scale-50 duration-500"
      >
    {btnLabel}
      </Link>
    </>
  );
};
