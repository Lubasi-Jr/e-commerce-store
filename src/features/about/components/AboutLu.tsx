import React from "react";

const AboutLu = () => {
  return (
    <>
      <h1 className="font-garamond font-bold text-center text-3xl mt-4 mb-4">
        ABOUT ME
      </h1>
      <div
        id="container"
        className="flex items-center justify-center w-full px-4 sm:px-[80px] lg:px-40"
      >
        <p className="min-h-[180px] w-full sm:w-[300px] lg:w-[400px] break-words text-center text-[#595667] font-inter text-base">
          Who am I? I am Lubasi Milupi a student at the University of Cape Town
          with a love for two things: coding and the timeless sound of vinyl
          records. My journey through tech and music inspired me to launch an
          online store, a place where passion meets culture. I gave the business
          the name "STYLAS" which is a nod to one of the most important pieces
          of a vinyl record. After realizing how much vinyl shaped my own life,
          I would like for it to shape the lives of music lovers, collectors,
          parents, and thoughtful gift buyers looking to share the magic of
          analog sound.
        </p>
      </div>
    </>
  );
};

export default AboutLu;
