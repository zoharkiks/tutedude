import React from "react";
import Button from "./Button";

const WalletInfo = ({ earnings, totalRef, balance }) => {
  return (
    <div className="bg-white grid grid-cols-2 xl:grid-cols-3 gap-y-5 mb-[30px] py-5 px-[22.5px] rounded-[20px] drop-shadow-xl">
      <div className="flex flex-col">
        <h2 className="text-heading5 text-purple">Referral Earnings</h2>
        <h2 className="text-heading">₹ {earnings}</h2>
      </div>
      <div className="flex flex-col place-self-end xl:place-self-center">
        <h2 className="text-heading5 text-purple ">Total Referrals</h2>
        <h2 className="text-heading">{totalRef}</h2>
      </div>

      <div className="flex flex-col item xl:place-self-end">
        <h2 className="text-heading5 text-purple">Wallet Balance</h2>
        <h2 className="text-heading">₹ {balance}</h2>
      </div>

      <div className="flex items-end justify-end xl:justify-start xl:col-start-2 xl:col-span-3">
        <Button title="Withdraw Balance" />
      </div>
    </div>
  );
};

export default WalletInfo;
