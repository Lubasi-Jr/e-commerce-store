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
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthWrapper";

const NavBar = () => {
  const { isLoggedIn, logout } = useAuth();
  const path = usePathname();
  const { cart } = useCart();
  const cartCount = cart.length;
  return (
    <>
      {/* LAPTOP NAV BAR */}
      <nav className="hidden  w-full h-[82px] border-b-2 border-taka lg:flex justify-between items-center py-7 px-40">
        <Logo />
        <div id="tabs" className="w-[348px] flex items-center justify-between">
          {laptopTabs.map((item, index) => (
            <Link key={index} href={item.href}>
              <p
                className={`font-inter text-xs ${
                  path == item.href ? "text-tiki" : "text-taka"
                }`}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
        <div id="far-right-icons" className="flex gap-4 items-center">
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
          {isLoggedIn ? (
            <p
              onClick={() => console.log("Logging out user")}
              className="font-inter text-taka font-medium cursor-pointer"
            >
              Log out
            </p>
          ) : (
            <Link href={"/login"}>
              <p className="font-inter text-taka font-medium">Login</p>
            </Link>
          )}
        </div>
      </nav>

      {/* MOBILE NAV BAR */}
      <MobileNav />
    </>
  );
};

export default NavBar;
