import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section
      id="40_percent"
      className="w-full px-0 md:px-40 flex flex-col md:flex-row h-[680px] md:h-[350px]"
    >
      <div
        id="promo-text"
        className="h-1/2 md:h-full w-full md:w-1/2 bg-[#F7F6F5] px-5 py-12 md:px-14 md:py-16 flex flex-col gap-2 items-center justify-center"
      >
        <h1 className="w-[400px] h-16 break-words text-center font-garamond font-bold text-2xl text-taka">
          TURNABLES ARE 40% OFF ON YOUR FIRST PURCHASE!!
        </h1>
        <p className="w-96 h-16 text-[#595667] break-words text-center font-inter font-normal">
          What kind of friend would we be if we let you buy vinyl without a
          turntable
        </p>
        <p className="h-10 w-32 underline text-xl font-inter font-bold text-center cursor-pointer">
          SHOP NOW
        </p>
      </div>
      <div
        id="promo-image"
        className="h-1/2 md:h-full w-full md:w-1/2 relative"
      >
        <Image src={"/sale-off.jpg"} alt="promo on turnables" fill />
      </div>
    </section>
  );
};

export default PromoBanner;
