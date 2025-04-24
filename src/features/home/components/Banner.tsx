import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[750px] md:h-[640px] w-full flex flex-col md:flex-row justify-center mb-2.5">
      <div
        id="relative-rectangle"
        className="w-full bg-[#826f66] h-1/2 sm:w-1/2 sm:h-full  md:relative px-2.5 py-2.5 flex flex-col items-center justify-center gap-2.5"
      >
        <p className="font-inter text-white w-80 mx-auto text-center break-words">
          African Vinyl records of albums since the 1960's
        </p>
        <h1 className="text-4xl w-80 break-words text-center font-garamond text-white">
          AFRICAN VINYL ANTHOLOGY
        </h1>
      </div>
      <div id="banner" className="w-full sm:w-1/2 sm:h-full h-1/2 relative">
        <Image src={"/frame_it.png"} alt="banner" fill />
      </div>
    </div>
  );
};

export default Banner;
