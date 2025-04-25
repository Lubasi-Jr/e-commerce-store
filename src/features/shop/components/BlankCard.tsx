import React from "react";

const BlankCard = () => {
  return (
    <div
      id="card"
      className="mx-auto h-[500px] md:h-[530px] w-3xs flex flex-col items-start gap-3"
    >
      <div
        id="card-image"
        className="w-full h-60 md:h-80 relative hover:opacity-50 hover:shadow-md transition-all duration-300 cursor-pointer bg-gray-300 rounded-md animate-pulse"
      ></div>
      <h2
        id="product-name"
        className="h-8 md:h-2.5 w-full break-words font-inter font-semibold uppercase text-taka text-start bg-gray-300 rounded-full animate-pulse"
      ></h2>
      <h2
        id="price"
        className="h-2.5 w-full font-inter font-semibold uppercase text-taka text-start mb-9 bg-gray-300 rounded-full animate-pulse"
      ></h2>
    </div>
  );
};

export default BlankCard;
