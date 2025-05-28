"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const cart: any = [];

  useEffect(() => {
    const paymentStatus = searchParams.get("payment");

    if (paymentStatus && typeof window !== "undefined") {
      //console.log("Payment query param found:", paymentStatus);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("Cart should be cleared");

      // Remove the query param to avoid repeated clearing
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete("payment");
      router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
    }
  }, [searchParams]);

  return <>{children}</>;
};

export default ClientWrapper;
