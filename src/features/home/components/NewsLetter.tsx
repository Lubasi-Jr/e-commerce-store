"use client";
import React, { useState } from "react";
import { sendEmail } from "../actions/newsLetterEmail";
import { toast } from "sonner";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <>
      <h1 className="font-garamond font-bold text-center text-3xl mt-4 mb-4">
        FOR NEWS, COLLECTIONS AND MORE
      </h1>
      <p className="w-2xs h-3 text-center text-taka mx-auto text-base font-inter">
        Sign up for emails
      </p>
      <form
        action={async (formData) => {
          await sendEmail(formData);
          setEmail("");
          toast.success("Thank you for subscribing to our newsletter");
        }}
        id="sign-up-email"
        className="h-32 w-full px-10 flex flex-col items-center justify-center gap-5 mb-6"
      >
        <div id="input" className="w-full md:w-[390px] h-10">
          <input
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email address"
            className="w-full h-full border-0 border-b-2 border-taka placeholder:text-center placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
        <button
          type="submit"
          className="h-10 w-[100px] border-1 border-taka px-2 md:px-4 py-2 text-taka text-center hover:text-white hover:bg-taka transition-colors duration-300 ease-in-out cursor-pointer"
        >
          SIGN UP
        </button>
      </form>
    </>
  );
};

export default NewsLetter;
