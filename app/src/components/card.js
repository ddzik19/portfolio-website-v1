import React from "react";
const Card = ({ image, alt, href }) => {
  return (
    <div
      className="w-fit mx-auto rounded-2xl border-2 border-white
     lg:border-gray-600 hover:border-white overflow-hidden
     hover:shadow-[0_0px_20px_0px_rgba(248,6,204,0.5)] hover:transition ease-in-out hover:translate-y-[-20px]
    transition lg:toggle-visible"
    >
      <a href={href}>
        <img className="lg:w-full lg:max-h-[300px]" src={image} alt={alt} />
      </a>
    </div>
  );
};

export default Card;
