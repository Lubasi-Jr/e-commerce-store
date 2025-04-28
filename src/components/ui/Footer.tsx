import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { socialLinks } from "@/constants";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <>
      <footer className="px-5 bg-taka flex flex-col w-full h-[550px] gap-5 md:px-[60px] lg:px-40 md:flex-row md:h-[340px]">
        <div
          id="get-started"
          className="w-full border-b-2 border-[#f7f6f5] h-56 py-5 flex flex-col items-start justify-between"
        >
          <div
            id="logo"
            className="w-[145px] h-10 font-garamond text-4xl text-[#f7f6f5]"
          >
            STYLAS
          </div>
          <p className="w-[320px] h-[32px] text-[#f7f6f5] font-inter mb-6">
            Celebrating African music and culture through timeless vinyl,
            instruments, and art.
          </p>
          <Link href={"/shop"}>
            <button className="w-[142px] h-[40px] whitespace-nowrap font-inter cursor-pointer bg-none border-2 border-[#f7f6f5] text-[#F7F6F5] font-semibold px-2 py-1.5 flex gap-2 items-center justify-center">
              GET STARTED
            </button>
          </Link>
        </div>
        <div
          id="quick_links"
          className="w-full border-b-2 border-[#f7f6f5] py-5 flex h-56 items-start justify-between"
        >
          <div id="list1" className="w-[180px] ">
            <h1 className="text-white mb-1 text-2xl font-inter">QUICK LINKS</h1>
            <ul className="flex flex-col items-start justify-between">
              {footerLinks.map((item, index) => (
                <Link href={item.link} key={index}>
                  <li className="text-[#f7f6f5] font-inter">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div id="list1" className="w-[180px] ">
            <h1 className="text-white mb-1 text-2xl font-inter">SOCIALS</h1>
            <ul className="flex flex-col items-start justify-between">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f7f6f5] font-inter no-underline hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <div
        id="rights"
        className="w-full h-[130px] bg-taka flex flex-col items-center justify-center text-[#f7f6f5]"
      >
        <h3>Copyright &copy; 2025 STYLAS</h3>
        <h3>All Rights Reserved</h3>
      </div>
    </>
  );
};

export default Footer;
