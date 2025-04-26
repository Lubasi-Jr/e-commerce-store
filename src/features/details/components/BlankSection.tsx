import React from "react";
import Image from "next/image";

const BlankSection = () => {
  return (
    <section
      id="container"
      className="min-h-screen px-4 flex flex-col gap-3 w-full mt-1.5 sm:px-20 lg:px-40 lg:flex-row lg:gap-5 lg:h-[880px]"
    >
      <div
        id="image-selector"
        className="w-full h-[640px] flex flex-col gap-2 items-start lg:h-full lg:w-1/2"
      >
        <div
          id="primary-image"
          className="h-[512px] w-full lg:h-[600px] relative bg-gray-300 animate-pulse"
        ></div>
        <div
          id="secondary-image"
          className="h-24 w-24 relative bg-gray-300 animate-pulse"
        ></div>
      </div>
      <div
        id="details-add-to-cart"
        className="w-full h-[640px] lg:h-full lg:w-1/2 flex flex-col gap-[68px] sm:gap-[80px] "
      >
        <div
          id="name-price"
          className="bg-gray-300 animate-pulse w-full h-10 flex flex-col gap-1.5"
        >
          <h1
            id="name"
            className="w-[300px] h-4 font-inter text-taka uppercase font-bold text-xl"
          ></h1>
          <p className="font-inter text-taka">
            <span className="text-tiki"></span>
          </p>
          <h1
            id="price"
            className="w-[300px] h-4 font-inter  uppercase font-bold text-tiki"
          ></h1>
        </div>
        <div id="button-group" className="w-full h-10 flex flex-col gap-1.5">
          <button className="animate-pulse h-10 w-full border-1 border-taka px-2 md:px-4 py-2 text-white text-center hover:text-taka hover:bg-white bg-taka transition-colors duration-300 ease-in-out cursor-pointer font-inter"></button>
          <button className="animate-pulse h-10 w-full border-1 border-taka px-2 md:px-4 py-2 text-white text-center hover:text-taka hover:bg-white bg-taka transition-colors duration-300 ease-in-out cursor-pointer font-inter"></button>
        </div>
        <div id="details" className="w-full h-auto flex flex-col gap-3">
          <h1
            id="name"
            className="w-[300px] h-4 font-inter text-taka font-semibold text-xl bg-gray-300 animate-pulse"
          ></h1>
          <p
            id="details-paragraph"
            className="w-full min-h-[180px] break-words text-gray-700 font-inter bg-gray-300 animate-pulse"
          ></p>
        </div>
      </div>
    </section>
  );
};

export default BlankSection;
