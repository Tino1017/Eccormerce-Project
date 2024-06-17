import React from "react";

export const Product = ({
  productImage,
  productBrand,
  price,
  productName,
  rating,
  reviews,
  productId,
}) => {
  return (
    <div className="flex">
      <div> {productImage} </div>
      <div className="flex flex-col">
        <p>{productBrand}</p>
        <p>{productId}</p>
      </div>
      <div>
        <h1>{productName}</h1>
        <p></p>
      </div>
    </div>
  );
};
