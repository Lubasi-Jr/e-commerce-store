import React from "react";
import Image from "next/image";

const AuthPageBanner = () => {
  return (
    <section className="w-full px-2 py-2 h-20 flex items-center justify-center border-b-2 border-gray-500 mb-8">
      <div className="h-10 w-[120px] sm:h-16 sm:w-[150px] flex gap-1.5 justify-start items-center">
        <div
          id="logo-image"
          className="h-8 w-8 sm:h-12 md:w-12 items-center relative"
        >
          <Image src={"/vinyl-svgrepo-com.svg"} fill alt="logo" />
        </div>
        <h1 className="w-[74px] sm:w-[104] h-8 sm:h-11 font-garamond text-2xl sm:text-4xl font-semibold">
          STYLAS
        </h1>
      </div>
    </section>
  );
};

export default AuthPageBanner;
