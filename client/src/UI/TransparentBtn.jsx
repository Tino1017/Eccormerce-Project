import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export const TransparentBtn = ({ btnLabel, btnLink }) => {
  return (
    <>
      <Link to={btnLink} className="text-primary font-semibold">
        {btnLabel}
      </Link>
    </>
  );
};
