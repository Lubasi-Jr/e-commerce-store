import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="h-8 w-[120px] flex gap-1.5 justify-start items-center">
      <div id="logo-image" className="h-8 w-8 items-center relative">
        <Image src={"/vinyl-svgrepo-com.svg"} fill alt="logo" />
      </div>
      <h1 className="w-[74px] h-8 font-garamond text-2xl font-semibold">
        STYLAS
      </h1>
    </div>
  );
};

export default Logo;
