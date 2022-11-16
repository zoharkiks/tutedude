import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  EnrolledCard,
  Footer,
  Navbar,
  ReferralCode,
  WalletBalance,
} from "../components";
import { walletData, refCode, enrolledInfo } from "../data";




const FriendsReferred = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState(walletData[0]);
  const [code, setCode] = useState(refCode[0]);
  const [refInfo, setRefInfo] = useState(enrolledInfo);





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
        <ReferralCode refCode={code.refCode} />
        <WalletBalance totalBalance={data.balance} />
      </section>

      <section className="px-[34px] pt-[30px] flex flex-col justify-between xl:px-[187px]">
        <h1 className="text-purple  text-heading2 mb-5">
          Friends who Enrolled(3)
        </h1>

        <div className="flex flex-col space-y-5 xl:flex-row xl:space-y-0 xl:space-x-5   ">
        
            {refInfo.map((ref) => (
              
                <EnrolledCard
                  key={ref.id}
                  name={ref.name}
                  dateEnrolled={ref.dateEnrolled}
                  totalCourses={ref.coursesEnrolled.length}
                  refAmount={ref.refAmount}
                  courses={ref.coursesEnrolled}
                />
             
            ))}
          
        </div>
      </section>
      {/* Footer */}

      <Footer />
    </div>
  );
};

export default FriendsReferred;
