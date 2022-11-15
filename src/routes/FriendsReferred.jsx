import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar, ReferralCode, WalletBalance } from "../components";

const FriendsReferred = () => {
  return (
    <div className="font-poppins">
      {/* Navbar */}
      <Navbar />
      <Link
        to="/"
        className="flex text-purple text-heading4 mx-[34px] xl:hidden"
      >
        &#8592; go back
      </Link>
      {/* Body */}
      <section className="px-[34px] pt-[30px] flex justify-between xl:px-[187px]   ">
        <ReferralCode />
        <WalletBalance />
      </section>
      {/* Footer */}

      <Footer />
    </div>
  );
};

export default FriendsReferred;
