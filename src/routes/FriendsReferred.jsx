import React, { useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { EnrolledCard, Footer, Navbar, ReferralCode, WalletBalance } from "../components";

const FriendsReferred = () => {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  

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

      <section className="px-[34px] pt-[30px] flex flex-col justify-between xl:px-[187px]">


        <h1 className="text-purple  text-heading2 mb-5">Friends who Enrolled(3)</h1>

        <div className="flex flex-col space-y-5 xl:flex-row xl:space-y-0 xl:space-x-5 xl:overflow-auto   ">
        <EnrolledCard />
        <EnrolledCard />
        <EnrolledCard />
</div> 
       
      </section>
      {/* Footer */}

      <Footer />
    </div>
  );
};

export default FriendsReferred;
