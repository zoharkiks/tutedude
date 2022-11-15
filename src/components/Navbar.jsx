import React from "react";
import { images } from "../constants";

const Navbar = () => {
  return (
    <div className="pt-[59px] pr-[35px] pl-[3px] xl:pr-[33px] xl:pl-[74px] xl:pt-6">
      <div className="flex justify-between">
        <img src={images.logo} alt="logo" />

        <div className="flex items-center ">
          <div className="xl:flex hidden space-x-7 ">
          <h2 className="text-navLink text-purple opacity-25">My Assignment</h2>
          <h2 className="text-navLink text-purple opacity-25">Chat With Mentor</h2>
          </div>
         

          <div className="flex cursor-pointer bg-purple rounded-lg items-center  text-white  py-3 px-4 xl:bg-white ">
        <img
            className="h-6 w-6 hidden xl:inline mr-[6px]"
            src={images.navPerson}
            alt=""
          />
          <h2 className="text-heading4 xl:text-purple">ProfileName </h2>
          <img
            className="h-[7.41px] w-[12px] ml-4"
            src={images.chevronDownIcon}
            alt=""
          />
        </div>

        </div>

        

      </div>
      <h1 className="text-heading5 mt-[51px] mx-[35px]">UI/UX > Refer & Earn </h1>
    </div>
  );
};

export default Navbar;
