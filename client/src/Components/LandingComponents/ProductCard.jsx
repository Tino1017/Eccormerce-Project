import React from "react";

export const ProductCard = ({
  productImage,
  productName,
  productPrice,
  productDescription,
  cartButton,
}) => {
  return (
    <>
      <div className="flex flex-col items-start px-10 space-y-5 max-w-xs">
        <div className="flex justify-center items-center align border border-primary rounded-xl p-10">
          {" "}
          <img
            src={productImage}
            alt="Product Image"
            className="rounded-2xl w-[170px]"
          />
        </div>

        <div className="">
          <p className="font-semibold pb-1 max-w-xs text-sm">{productName}</p>
          <p className="font-bold  opacity-80">R{productPrice}</p>
          <p className="max-w-xs md:max-w-xl text-sm text-left py-5">
            {productDescription}
          </p>
          {/* <button  className="bg-primary py-3 px-4 text-white  rounded-3xl hover:opacity-70 active:scale-50 duration-500">Add to cart</button> */}
        </div>
      </div>
    </>
  );
};
