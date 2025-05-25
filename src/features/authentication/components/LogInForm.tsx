"use client";
import { useAuth } from "@/context/AuthWrapper";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LogInForm = () => {
  const { signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await signIn(email, password);
    if (response) {
      router.push("/");
    } else {
      setError(!error);
    }
  };
  return (
    <>
      <section className="px-4 min-h-screen flex flex-col items-start justify-start w-full gap-10 sm:px-40 lg:px-80">
        <h1 className="sm:text-4xl text-3xl break-words font-inter font-bold text-[#595667]">
          Welcome Back
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
          <div id="input-label-combo" className="flex flex-col w-full gap-1">
            <label htmlFor="password" className="font-inter font-semibold">
              Password
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
          <button
            type="submit"
            className="w-[120px] h-11 bg-taka text-white px-1.5 py-2 text-center whitespace-nowrap font-medium cursor-pointer hover:bg-white hover:text-taka transition-colors duration-200 ease-in-out hover:border-2 hover:border-taka"
          >
            LOG IN
          </button>
        </form>
        {error && (
          <p className="text-base font-inter text-red-600">
            Invalid Login credentials
          </p>
        )}
        <div
          id="log-in-links"
          className="gap-1 flex flex-col items-start justify-start"
        >
          <p className="text-base font-inter text-gray-600">
            Forgot your password ? reset{" "}
            <Link href={"/forgot-password"}>
              <span className="font-inter text-tiki underline">here</span>
            </Link>
          </p>
          <p className="text-base font-inter text-gray-600">
            Don't have an account ? sign up{" "}
            <Link href={"/sign-up"}>
              <span className="font-inter text-tiki underline">here</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default LogInForm;
