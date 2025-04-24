"use client";
import React from "react";
import { useState } from "react";
import { Menu } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { X } from "lucide-react";
import { Search } from "lucide-react";
import { CircleUser } from "lucide-react";
import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { tabs } from "@/constants";
import { laptopTabs } from "@/constants";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <>
      {/* LAPTOP NAV BAR */}
      <nav className="hidden  w-full h-[82px] border-b-2 border-taka lg:flex justify-between items-center py-7 px-40">
        <div id="logo" className="text-3xl text-taka font-garamond w-[145px]">
          STYLAS
        </div>
        <div id="tabs" className="w-[348px] flex items-center justify-between">
          {laptopTabs.map((item, index) => (
            <Link key={index} href={item.href}>
              <p className="font-inter text-xs">{item.title}</p>
            </Link>
          ))}
        </div>
        <div
          id="icons"
          className="w-[152px] h-6 flex items-center justify-between"
        >
          <Search size={20} />
          <CircleUser size={20} />
          <Heart size={20} />
          <ShoppingCart size={20} />
        </div>
      </nav>

      {/* MOBILE NAV BAR */}
      <MobileNav />
    </>
  );
};

export default NavBar;
