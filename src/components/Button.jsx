import React from "react";

const Button = ({ title }) => {
  return (
    <div className="bg-purple cursor-pointer text-center rounded-full flex w-max justify-center items-center h-max px-4 py-2">
      <h1 className="text-heading4 text-white">{title}</h1>
    </div>
  );
};

export default Button;
