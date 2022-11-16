import React from "react";

const EnrolledCard = () => {
  return (
    <div className="bg-gradient-to-l from-[#800080] to-[#FF864C] rounded-[20px] text-white p-5">
      <div className="flex justify-between">
        <h2 className="text-heading4 font-bold">Dhiraj Saxsena</h2>
        <h2 className="text-heading5">14 Sep, 2022</h2>
      </div>

      <h2 className="text-heading5 font-medium mt-[10px] ">
        Courses Enrolled(6)
      </h2>

      <div className="flex flex-wrap  mt-[14px] overflow-auto gap-y-[18px] mr-[20px] pr-[49px] scrollbar-thumb-beige scrollbar-thumb-rounded-full scrollbar-thin  h-24">
        {/* Course Name */}
        <div className="flex w-max justify-center items-center ml-[10px] border-2 border-beige rounded-full py-1 px-[9px]  ">
          <span className="text-heading5 ">UI/UX</span>
        </div>

        <div className="flex w-max justify-center items-center ml-[10px] border-2 border-beige rounded-full py-1 px-[9px]  ">
          <span className="text-heading5 ">Photoshop</span>
        </div>

        <div className="flex w-max justify-center items-center ml-[10px] border-2 border-beige rounded-full py-1 px-[9px]  ">
          <span className="text-heading5 ">Illustrator</span>
        </div>

        <div className="flex w-max justify-center items-center ml-[10px] border-2 border-beige rounded-full py-1 px-[9px]  ">
          <span className="text-heading5 ">UI/UX</span>
        </div>

        <div className="flex w-max justify-center items-center ml-[10px] border-2 border-beige rounded-full py-1 px-[9px]  ">
          <span className="text-heading5 ">UI/UX</span>
        </div>

        <div className="flex w-max justify-center items-center ml-[10px] border-2 border-beige rounded-full py-1 px-[9px]  ">
          <span className="text-heading5 ">UI/UX</span>
        </div>

        <div className="flex w-max justify-center items-center ml-[10px] border-2 border-beige rounded-full py-1 px-[9px]  ">
          <span className="text-heading5 ">UI/UX</span>
        </div>

        <div className="flex w-max justify-center items-center ml-[10px] border-2 border-beige rounded-full py-1 px-[9px]  ">
          <span className="text-heading5 ">UI/UX</span>
        </div>

        <div className="flex w-max justify-center items-center ml-[10px] border-2 border-beige rounded-full py-1 px-[9px]  ">
          <span className="text-heading5 ">UI/UX</span>
        </div>
      </div>

      <div className="flex  items-center mt-8">
        <h2 className="text-heading4 font-normal mr-[10px]">
          Referral Amount{" "}
        </h2>
        <h2 className="text-heading2">₹185</h2>
      </div>
    </div>
  );
};

export default EnrolledCard;
