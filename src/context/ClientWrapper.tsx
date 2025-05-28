"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const cart: any = [];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    const paymentStatus = url.searchParams.get("payment");

    if (paymentStatus) {
      console.log("Payment complete. Cart cleared.");
      localStorage.setItem("cart", JSON.stringify(cart));

      // Redirect to home (clean URL)
      router.replace("/", { scroll: false });
    }
  }, []);

  return <>{children}</>;
};

export default ClientWrapper;
