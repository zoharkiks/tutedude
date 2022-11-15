import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="flex flex-col px-[34px] xl:px-[187px] space-y-5 mb-9 xl:mb-20 mt-[60px] w-max">
      {location.pathname === "/friends-referred" ? (
        ""
      ) : (
        <Link
          to="/friends-referred"
          href=""
          className="text-purple text-heading4 "
        >
          Friend's Who Enrolled
        </Link>
      )}

      <a href="" className="text-purple text-heading4 cursor-pointer ">
        Terms & Conditions
      </a>
    </footer>
  );
};

export default Footer;
