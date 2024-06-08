import React from "react";
import {HashLink as Link} from 'react-router-hash-link';

export const PrimaryBtn = ({btnLabel,btnLink}) => {
  return (
    <>
      <Link
        to={btnLink}
        className="bg-primary py-2 px-4 text-white  rounded-2xl hover:opacity-70 active:scale-50 duration-500"
      >
    {btnLabel}
      </Link>
    </>
  );
};
