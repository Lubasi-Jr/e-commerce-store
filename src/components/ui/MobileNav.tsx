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

const MobileNav = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="w-full h-[82px] border-b-2 border-taka flex justify-between items-center px-5 py-5 lg:hidden">
        <div
          id="menu"
          className="w-5 h-5 cursor-pointer"
          onClick={() => setMobileOpen((previous) => !previous)}
        >
          <Menu size={20} color="#3A3845" />
        </div>
        <div id="logo" className="text-3xl text-taka font-garamond">
          STYLAS
        </div>
        <div id="cart">
          <ShoppingCart size={20} color="#3A3845" />
        </div>
      </nav>
      {/* MOBILE NAV BAR */}
      <motion.div
        id="mobile-nav"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: mobileOpen ? 400 : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`w-full border-b-2 border-taka bg-white flex flex-col overflow-hidden  items-start justify-start gap-4 absolute top-0 z-10 ${
          mobileOpen ? "px-5 py-5" : "px-0 py-0"
        }`}
      >
        <div
          id="close"
          className="w-8 h-8 overflow-x-hidden overflow-y-hidden cursor-pointer"
          onClick={() => setMobileOpen((previous) => !previous)}
        >
          <X
            size={30}
            color="#3A3845"
            className="overflow-x-hidden overflow-y-hidden"
          />
        </div>
        {tabs.map((tab, index) => (
          <Link key={tab.id} href={tab.href}>
            <div
              id="link"
              className="w-full text-3xl text-taka font-semibold font-garamond overflow-y-clip"
            >
              {tab.title}
            </div>
          </Link>
        ))}
      </motion.div>
    </>
  );
};

export default MobileNav;
