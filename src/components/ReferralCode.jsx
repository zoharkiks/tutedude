import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ReferralCode = ({ refCode }) => {
  const location = useLocation();
  const [referralPage, setReferralPage] = useState();

  useEffect(() => {
    if (location.pathname === "/") {
      setReferralPage(false);
    } else {
      setReferralPage(true);
    }
  }, []);

  return (
    <div className="xl:mt-0 flex flex-col ">
      <h1
        className={
          referralPage
            ? "text-purple text-heading4"
            : "text-heading2 text-purple"
        }
      >
        Your Referral Code
      </h1>
      <div
        className={
          referralPage
            ? "border-2 border-[#DFDFDF] text-center  justify-center items-center flex rounded-xl mt-2 p-2 w-max"
            : "flex mt-5 justify-center items-center bg-gradient-to-l from-[#800080] to-[#FF864C] p-[2px] rounded"
        }
      >
        <h2
          className={
            referralPage
              ? "text-heading4 tracking-[8px] text-center"
              : "bg-white w-full text-center text-heading3 py-4 xl:text-purple"
          }
        >
          {refCode}
        </h2>
      </div>
    </div>
  );
};

export default ReferralCode;
