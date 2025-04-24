import React from "react";

const SpinToWin = () => {
  return (
    <>
      <h1 className="font-garamond font-bold text-center text-3xl mt-4 mb-4">
        SPIN TO WIN
      </h1>
      <section
        id="40_percent"
        className="w-full px-0 md:px-40 flex flex-col md:flex-row h-[680px] md:h-[350px]"
      >
        <div
          id="promo-text"
          className="h-1/2 md:h-full w-full md:w-1/2 bg-[#F7F6F5] px-5 py-12 md:px-14 md:py-16 flex flex-col gap-2 items-center justify-center"
        >
          <h1 className="w-[400px] h-16 break-words text-center font-garamond font-bold text-2xl text-taka">
            WOULD YOU SAY YOU HAVE GOT GOOD MUSIC TASTE!?
          </h1>
          <p className="w-96 h-16 text-[#595667] break-words text-center font-inter font-normal">
            Try to spin a random record and if you guess what song it is
            correctly, you'll stand a chance to win some prizes
          </p>
          <p className="h-10 w-32 underline text-xl font-inter font-bold text-center cursor-pointer">
            SPIN NOW
          </p>
        </div>
        <div
          id="promo-image"
          className="h-1/2 md:h-full w-full md:w-1/2 relative"
        >
          <video
            className="w-full h-full object-cover"
            width={100}
            height={100}
            autoPlay
            muted
            loop
            poster="/video-poster.png"
          >
            <source src="/vinylVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};

export default SpinToWin;
