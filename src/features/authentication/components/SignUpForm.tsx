"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const [firstName, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const firstName = formData.get("firstName") as string;
    const surname = formData.get("surname") as string;

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          firstName: firstName,
          surname: surname,
        },
      },
    });

    if (error) {
      console.error("Sign up error:", error);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <section className="px-4 min-h-screen flex flex-col items-start justify-start w-full gap-10 sm:px-40 lg:px-80">
        <h1 className="sm:text-4xl text-3xl break-words font-inter font-bold text-[#595667]">
          Create your account
        </h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7"
        >
          <div id="input-label-combo" className="flex flex-col w-full gap-1">
            <label htmlFor="firstName" className="font-inter font-semibold">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setName(e.target.value)}
              name="firstName"
              required
              type="text"
              className="w-full md:w-[60%] h-5 border-0 border-b-2 border-taka placeholder:text-start px-0.5 placeholder:text-gray-400 focus:outline-none focus:ring-0"
            />
          </div>
          <div id="input-label-combo" className="flex flex-col w-full gap-1">
            <label htmlFor="name" className="font-inter font-semibold">
              Surname
            </label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              name="surname"
              required
              type="text"
              className="w-full md:w-[60%] h-5 border-0 border-b-2 border-taka placeholder:text-start px-0.5 placeholder:text-gray-400 focus:outline-none focus:ring-0"
            />
          </div>
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
            className="w-[180px] h-11 bg-taka text-white px-1.5 py-2 text-center whitespace-nowrap font-medium cursor-pointer hover:bg-white hover:text-taka transition-colors duration-200 ease-in-out hover:border-2 hover:border-taka"
          >
            CREATE ACCOUNT
          </button>
        </form>
        <p className="text-base font-inter text-gray-600">
          Already have an account ? log in{" "}
          <Link href={"/login"}>
            <span className="font-inter text-tiki underline">here</span>
          </Link>
        </p>
      </section>
    </>
  );
};

export default SignUpForm;
