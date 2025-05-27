"use client";
import React, { useEffect } from "react";
import { generateFormData } from "../utils/generateFormEntries";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthWrapper";
import { useCart } from "@/context/CartContext";

const PayNowButton = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const { cart, clearCart } = useCart();

  useEffect(() => {
    if (!isLoggedIn || cart.length === 0) {
      router.push("/");
    }
  }, [isLoggedIn, cart, router]);

  const paymentData = generateFormData();

  return (
    <>
      <form action="https://sandbox.payfast.co.za/eng/process" method="POST">
        {Object.entries(paymentData).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} />
        ))}
        <button
          type="submit"
          className="text-center text-white bg-tiki md:w-[300px] md:h-[60px] w-[220px] h-[40px] border-2 border-tiki px-4 py-2 md:text-xl text-base whitespace-nowrap hover:text-tiki hover:bg-white transition-colors duration-300 ease-in-out"
        >
          PAY NOW
        </button>
      </form>
    </>
  );
};

export default PayNowButton;
