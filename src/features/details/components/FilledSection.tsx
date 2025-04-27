"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const FilledSection = ({
  name,
  price,
  details,
  primaryImg,
  secondaryImg,
  uuid,
}: Details & { uuid: string }) => {
  //Create the product that is to be added to the cart
  const thisProduct: Product = {
    id: uuid,
    name: name,
    imageUrl: primaryImg,
    price: price,
  };

  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(thisProduct);
    toast.success(`Item added: ${name}`, {
      description: `You can view it in your cart`,
    });
  };

  const handleBuyNow = () => {
    addToCart(thisProduct);
    toast.success(`Item added: ${name}`, {
      description: `You can view it in your cart`,
    });
    //Add to cart and then route to Cart/Checkout page
    router.push("/cart");
  };

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
        <Link href="/shop">
          <p className="font-semibold font-inter text-[#807F86] cursor-pointer">
            Shop /
          </p>
        </Link>
        <p className="font-semibold font-inter text-taka">{name}</p>
      </div>
      <section
        id="container"
        className="min-h-screen px-4 flex flex-col gap-3 w-full mt-1.5 sm:px-20 lg:px-40 lg:flex-row lg:gap-5 lg:h-[880px]"
      >
        <div
          id="image-selector"
          className="w-full h-[640px] flex flex-col gap-2 items-start lg:h-full lg:w-1/2"
        >
          <div
            id="primary-image"
            className="h-[512px] w-full lg:h-[600px] relative"
          >
            <Image src={primaryImg} fill alt="image" />
          </div>
          <div id="secondary-image" className="h-24 w-24 relative">
            <Image alt="image2" fill src={secondaryImg} />
          </div>
        </div>
        <div
          id="details-add-to-cart"
          className="w-full h-[640px] lg:h-full lg:w-1/2 flex flex-col gap-[68px] sm:gap-[80px] "
        >
          <div id="name-price" className="w-full h-10 flex flex-col gap-1.5">
            <h1
              id="name"
              className="w-[300px] h-4 font-inter text-taka uppercase font-bold text-xl"
            >
              {name}
            </h1>
            <p className="font-inter text-taka">
              Stock: <span className="text-tiki">1 item left</span>
            </p>
            <h1
              id="price"
              className="w-[300px] h-4 font-inter  uppercase font-bold text-tiki"
            >
              R {price}
            </h1>
          </div>
          <div id="button-group" className="w-full h-10 flex flex-col gap-1.5">
            <button
              onClick={() => handleAddToCart()}
              className="h-10 w-full border-1 border-taka px-2 md:px-4 py-2 text-white text-center hover:text-taka hover:bg-white bg-taka transition-colors duration-300 ease-in-out cursor-pointer font-inter"
            >
              ADD TO CART
            </button>
            <button
              onClick={() => handleBuyNow()}
              className="h-10 w-full border-1 border-taka px-2 md:px-4 py-2 text-taka text-center hover:text-white hover:bg-taka bg-white transition-colors duration-300 ease-in-out cursor-pointer font-inter"
            >
              BUY NOW
            </button>
          </div>
          <div id="details" className="w-full h-auto flex flex-col gap-3">
            <h1
              id="name"
              className="w-[300px] h-4 font-inter text-taka font-semibold text-xl"
            >
              Details
            </h1>
            <p
              id="details-paragraph"
              className="w-full min-h-[180px] break-words text-gray-700 font-inter"
            >
              {details}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilledSection;
