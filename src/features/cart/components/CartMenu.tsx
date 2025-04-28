"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { X } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CartMenu = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    toast.success("Your order was made successfully");
    clearCart();
    router.push("/");
  };

  if (cart.length == 0)
    return (
      <section className="px-4 min-h-screen flex flex-col w-full gap-10 lg:px-20">
        <h1 className="mx-auto sm:text-4xl text-3xl break-words font-inter font-bold text-[#595667]">
          Ooops, Your Cart is Empty
        </h1>
      </section>
    );
  return (
    <>
      <section className="px-4 min-h-screen flex flex-col w-full gap-10 lg:px-20">
        <div
          id="cart-items"
          className="w-full h-auto flex flex-col gap-2 sm:gap-4 lg:gap-6 items-center justify-center"
        >
          {cart.map((item, index) => (
            <div
              key={index}
              id="product"
              className="border-b-2 border-taka h-44 flex flex-col gap-1.5 items-start justify-start  w-full sm:flex-row sm:justify-evenly sm:items-center"
            >
              <div
                id="delete"
                onClick={() => removeFromCart(item.product.id)}
                className="w-[50px] h-6 text-red-500 cursor-pointer"
              >
                <X size={20} color="#fb2c36" />
              </div>
              <div className="h-[140px] w-full flex gap-0 sm:h-full sm:w-[160px]">
                <div id="image" className="h-full w-[120px] relative">
                  <Image
                    src={item.product.imageUrl}
                    fill
                    alt="product image in cart"
                  />
                </div>
              </div>
              <h2 className="font-inter upppercase font-bold">
                {item.product.name}
              </h2>
              <h2 className="font-inter">
                PRICE:{" "}
                <span className="font-inter font-semibold text-tiki">
                  R{item.product.price}
                </span>
              </h2>
            </div>
          ))}
        </div>
        <h1 className="text-center font-inter text-taka font-semibold text-2xl">
          TOTAL: <span className="text-tiki">R{totalPrice}</span>
        </h1>
        <button
          onClick={() => handleCheckout()}
          className="h-10 min-w-[200px] whitespace-nowrap mx-auto border-1 border-taka px-2 md:px-4 py-2 text-white text-center hover:text-taka hover:bg-white bg-taka transition-colors duration-300 ease-in-out cursor-pointer font-inter"
        >
          PROCEED TO CHECKOUT
        </button>
        <button
          onClick={() => clearCart()}
          className="h-10 min-w-[200px] whitespace-nowrap mx-auto border-1 border-taka px-2 md:px-4 py-2 text-taka text-center hover:text-white hover:bg-taka bg-white transition-colors duration-300 ease-in-out cursor-pointer font-inter mb-2.5"
        >
          CLEAR CART
        </button>
      </section>
    </>
  );
};

export default CartMenu;
