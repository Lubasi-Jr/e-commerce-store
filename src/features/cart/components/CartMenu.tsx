"use client";
import React from "react";
import { useCart } from "@/context/CartContext";

const CartMenu = () => {
  const { cart } = useCart();
  return (
    <h1 className="mt-6 px-6">
      The number of items in the cart are {cart.length}
    </h1>
  );
};

export default CartMenu;
