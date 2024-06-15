import React from "react";

export const Sections = ({ heading, sliderComponent }) => {
  return (
    <div className="flex flex-col space-y-10 py-10">
      <h1 className="text-2xl font-medium text-left">{heading}</h1>
      <div>{sliderComponent}</div>
    </div>
  );
};

