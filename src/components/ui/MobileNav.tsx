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
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthWrapper";
import { log } from "console";

const MobileNav = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { cart } = useCart();
  const cartCount = cart.length;
  const { isLoggedIn, logout } = useAuth();
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
        <Logo />
        <Link
          href={"/cart"}
          id="icons"
          className=" relative w-9 h-8 flex items-center justify-center"
        >
          <ShoppingCart size={30} />
          {cartCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-taka text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </div>
          )}
        </Link>
      </nav>
      {/* MOBILE NAV BAR */}
      <motion.div
        id="mobile-nav"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: mobileOpen ? 500 : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`w-full border-b-2 border-taka bg-white flex flex-col overflow-hidden  items-start justify-start gap-4 absolute top-0 z-20 ${
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
        {isLoggedIn ? (
          <div
            id="logout-button"
            className="w-full text-3xl text-taka font-semibold font-garamond overflow-y-clip"
            onClick={() => console.log("Logging out user")}
          >
            LOG OUT
          </div>
        ) : (
          <Link href={"/login"}>
            <div
              id="link"
              className="w-full text-3xl text-taka font-semibold font-garamond overflow-y-clip"
            >
              LOG IN
            </div>
          </Link>
        )}
      </motion.div>
    </>
  );
};

export default MobileNav;
