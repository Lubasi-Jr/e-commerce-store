"use client";
import React, { useState } from "react";
import { toast } from "sonner";

const SongGuess = () => {
  const [song, setSong] = useState("");

  const handleSubmit = () => {
    toast.success("Your song guess has been submitted successfully");
    setSong("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="sign-up-email"
        className="h-32 w-full px-10 flex flex-col items-center justify-center gap-5 mb-6"
      >
        <div id="input" className="w-full md:w-[390px] h-10">
          <input
            value={song}
            onChange={(e) => setSong(e.target.value)}
            type="text"
            placeholder="Enter your song guess"
            className="w-full h-full border-0 border-b-2 border-taka placeholder:text-center placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
        <button
          type="submit"
          className="h-10 w-[100px] border-1 border-taka px-2 md:px-4 py-2 text-white text-center hover:text-taka hover:bg-white bg-taka transition-colors duration-300 ease-in-out cursor-pointer"
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default SongGuess;
