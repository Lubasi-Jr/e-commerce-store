"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

const SpinTurnable = () => {
  const [isPlaying, setPlaying] = useState<boolean>(false);
  return (
    <>
      <h1 className="font-garamond font-bold text-center text-3xl mt-4 mb-4">
        SPIN TO WIN
      </h1>
      <div
        id="container"
        className="flex items-center justify-center w-full px-4 sm:px-[80px] lg:px-40 gap-3 flex-col"
      >
        <p className="min-h-[80px] w-full sm:w-[600px] lg:w-[600px] break-words text-center text-[#595667] font-inter text-base">
          It’s game time! Smash that play button, vibe to the beat, and when
          you’re feeling lucky — pause and drop your guess! Get it right and
          you’re in line to win epic prizes and crazy discounts! The turntable
          is spinning, the energy is high... are you fast enough to catch the
          groove and claim your reward? LET’S GO!
        </p>
        {isPlaying ? (
          <div
            id="open-turnable"
            className="w-full sm:w-[600px] lg:w-[800px] bg-blue-400 h-[400px]"
          ></div>
        ) : (
          <div
            id="closed-turnable"
            className="w-full sm:w-[600px] lg:w-[800px]  relative bg-red-400 h-[400px]"
          ></div>
        )}

        <button
          onClick={() => setPlaying((previous) => !previous)}
          className="h-10 min-w-[200px] whitespace-nowrap mx-auto border-1 border-taka px-2 md:px-4 py-2 text-taka text-center hover:text-white hover:bg-taka bg-white transition-colors duration-300 ease-in-out cursor-pointer font-inter mb-2.5"
        >
          {isPlaying ? "PAUSE" : "PLAY"}
        </button>
      </div>
    </>
  );
};

export default SpinTurnable;
