import CartMenu from "@/features/cart/components/CartMenu";
import React from "react";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <div
        id="breadcrums"
        className="w-full h-9 flex gap-3 px-4 sm:px-20 lg:px-40 mt-2"
      >
        <Link href="/">
          <p className="font-semibold font-inter text-[#807F86] cursor-pointer">
            Home /
          </p>
        </Link>
        <p className="font-semibold font-inter text-taka">Cart</p>
      </div>
      <CartMenu />
    </>
  );
};

export default Cart;
