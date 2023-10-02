import React from "react";

function HorizontalTitle({ title, button, image }) {
  return (
    <div className=" w-[210px] inline-block p-4 hover:scale-105 ease-in-out transition-500  ">
      <img
        className=" flex h-60 w-100 max-sm:w-[350px] max-sm:justify-center  object-cover"
        src={image}
        alt="aimg"
      />
      <div className="text-xl uppercase mx-auto my-4 text-gray-100 ">
        {" "}
        {title}
      </div>
      <a
        id="text"
        className="text-sm text-gray-300 first-letter:capitalize "
      >
        {button}
      </a>
      .
    </div>
  );
}

export default HorizontalTitle;
