"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

const UpdatePasswordForm = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPass] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password === confirmPassword) {
      try {
        const { error } = await supabase.auth.updateUser({ password });
        if (error) {
          setError(true);
          console.error("Error updating password:", error.message);
        } else {
          // Success: redirect to home
          router.push("/");
        }
      } catch (err) {
        setError(true);
        console.error("Unexpected error:", err);
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      <section className="px-4 min-h-screen flex flex-col items-start justify-start w-full gap-10 sm:px-40 lg:px-80">
        <h1 className="sm:text-4xl text-3xl break-words font-inter font-bold text-[#595667]">
          Enter your new password here
        </h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7"
        >
          <div id="input-label-combo" className="flex flex-col w-full gap-1">
            <label htmlFor="email" className="font-inter font-semibold">
              New Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
              type="password"
              className="w-full md:w-[60%] h-5 border-0 border-b-2 border-taka placeholder:text-start px-0.5 placeholder:text-gray-400 focus:outline-none focus:ring-0"
            />
          </div>
          <div id="input-label-combo" className="flex flex-col w-full gap-1">
            <label htmlFor="email" className="font-inter font-semibold">
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPass(e.target.value)}
              name="confirmPassword"
              required
              type="password"
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
            Passwords do not match
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

export default UpdatePasswordForm;
