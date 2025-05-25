"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [recover, setRecover] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // Get URL function imported from supabase docs
  const getURL = () => {
    let url = process.env.NEXT_PUBLIC_SITE_URL; // Set this to your site URL in production env.
    return `${url}update-password`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: getURL(),
    });
    if (error) {
      setError(true);
      console.error(error);
    }
    setError(false);
    setRecover(true);
  };
  return (
    <>
      <section className="px-4 min-h-screen flex flex-col items-start justify-start w-full gap-10 sm:px-40 lg:px-80">
        <h1 className="sm:text-4xl text-3xl break-words font-inter font-bold text-[#595667]">
          Enter your email to recover your password
        </h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7"
        >
          <div id="input-label-combo" className="flex flex-col w-full gap-1">
            <label htmlFor="email" className="font-inter font-semibold">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              type="email"
              className="w-full md:w-[60%] h-5 border-0 border-b-2 border-taka placeholder:text-start px-0.5 placeholder:text-gray-400 focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="submit"
            className="w-[120px] h-11 bg-taka text-white px-1.5 py-2 text-center whitespace-nowrap font-medium cursor-pointer hover:bg-white hover:text-taka transition-colors duration-200 ease-in-out hover:border-2 hover:border-taka"
          >
            SUBMIT
          </button>
        </form>
        {error && (
          <p className="text-base font-inter text-red-600">
            Account with this email does not exist
          </p>
        )}
        {recover && (
          <p className="text-base font-inter text-tiki">
            Password recovery link has been sent, check your inbox!!
          </p>
        )}

        <p className="text-base font-inter text-gray-600">
          Don't have an account ? sign up{" "}
          <Link href={"/sign-up"}>
            <span className="font-inter text-tiki underline">here</span>
          </Link>
        </p>
      </section>
    </>
  );
};

export default ForgotPassword;
