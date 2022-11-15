import React from "react";
import { images } from "../constants";

const Info = () => {
  return (
    <div className="">
      <h1 className="text-heading2 text-purple mt-12 mb-5 ">
        How does it work ?
      </h1>

      <div className="grid gap-y-5 grid-cols-1 xl:grid-cols-2 xl:w-max">
        <div className="flex space-x-5  ">
          <div className="flex bg-[#D9D9D940] rounded-full items-center justify-center h-[65px] w-[65px]  ">
            <img className="h-max" src={images.peopleIcon} alt="people-icon" />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-heading4">Invite Your Friends</h2>
            <h3 className="text-gray">
              Share the link tutedude.com with your friends
            </h3>
          </div>
        </div>

        <div className="flex  space-x-5">
          <div className="flex bg-[#D9D9D940] rounded-full items-center justify-center h-[65px] w-[65px]  ">
            <img
              className="h-max"
              src={images.referralIcon}
              alt="referral-icon"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-heading4">Friend purchases any course</h2>
            <h3 className="text-gray">
              Using you REFERRAL CODE in the payments page{" "}
            </h3>
          </div>
        </div>

        <div className="flex  space-x-5">
          <div className="flex bg-[#D9D9D940] rounded-full items-center justify-center h-[65px] w-[65px]  ">
            <img
              className="h-max "
              src={images.currencyIcon}
              alt="currency-icon"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-heading4">You get ₹ 200 as referral money</h2>
            <h3 className="text-gray">
            On total purchase the friend makes, into your wallet
            </h3>
          </div>
        </div>

        <div className="flex  space-x-5">
          <div className="flex bg-[#D9D9D940] rounded-full items-center justify-center h-[65px] w-[65px]  ">
            <img
              className="h-max"
              src={images.discountIcon}
              alt="discount-icon"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-heading4">Your Friend gets ₹ 200 Off </h2>
            <h3 className="text-gray">
              On his overall fee on successful purchase using your referral code
            </h3>
          </div>
        </div>

        <div className="flex  space-x-5">
          <div className="flex bg-[#D9D9D940] rounded-full items-center justify-center h-[65px] w-[65px]  ">
            <img className="h-max" src={images.walletIcon} alt="wallet-icon" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-heading4">Transfer money from wallet</h2>
            <h3 className="text-gray">
              When the wallet balance reaches ₹200 or more, you can withdraw it
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
