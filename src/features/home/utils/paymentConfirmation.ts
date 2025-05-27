"use client";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export const paymentMade = () => {
  const { cart, clearCart } = useCart();
  const searchParams = useSearchParams();

  if (searchParams.has("payment")) {
    clearCart();
    toast.success("Thank you for your order!!");
  }
};
