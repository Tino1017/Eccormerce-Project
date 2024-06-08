import React from "react";
import { SquarePrimaryBtn } from "../../UI/SquarePrimaryBtn";
import upload from './Assets/upload.svg';
import uploadtext from './Assets/uploadtext.svg';
import { TransparentBtn } from "../../UI/TransparentBtn";

export const UploadPicture = () => {
  const submitBtn = ["Try Again", "#"];
  const skipBtn = ['Skip','#']
  

  return (
    <div
      
      className="relative flex h-[95vh] items-center justify-center "
    id="upload-picture">
      <div className="relative z-[1] flex flex-col mx-auto text-center px-8 py-12 shadow-lg space-y-5 bg-white/65 rounded-lg">
        <h1 className="text-4xl font-medium mb-5">Profile Picture</h1>
        <div className="relative flex justify-center py-3">
          <img src={uploadtext} className="absolute w-28 bottom-28" alt="" />
          <input type="image" className="h-64 w-64 border-2 border-black/50 border-dashed  rounded-full" placeholder="Upload A Profile Picture"  src="" alt="" />
        </div>
       

        <SquarePrimaryBtn btnLabel={submitBtn[0]} btnLink={submitBtn[1]} />
        <TransparentBtn btnLabel={skipBtn[0]} btnLink={skipBtn[1]}/>
      </div>
      <div className="absolute top-3 left-4 z-0 bg-primary w-[180px] h-[180px] rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-30 right-0 bg-primary w-[240px] h-[240px] rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 bg-primary w-24 h-24 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 bg-primary w-[150px] h-[150px] rounded-full blur-3xl opacity-60"></div>
    </div>
  );
};





