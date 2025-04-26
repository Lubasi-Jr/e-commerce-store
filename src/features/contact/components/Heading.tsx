import React from "react";

const Heading = () => {
  return (
    <>
      <h1 className="font-garamond font-bold text-center text-3xl mt-4 mb-4">
        CONTACT US
      </h1>
      <div
        id="container"
        className="flex items-center justify-center w-full px-4 sm:px-[80px] lg:px-40"
      >
        <p className="min-h-[180px] w-full sm:w-[300px] lg:w-[400px] break-words text-center text-[#595667] font-inter text-base">
          If you have any questions, feedback, or special requests, feel free to
          reach out! Simply fill in the form below, and we’ll get back to you as
          soon as possible.
        </p>
      </div>
    </>
  );
};

export default Heading;
