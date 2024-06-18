import React from "react";

export const Sections = ({ heading, sliderComponent }) => {
  return (
    <div className="flex flex-col space-y-8 py-7">
      <h1 className="text-3xl font-medium text-left">{heading}</h1>
      <div>{sliderComponent}</div>
    </div>
  );
};

