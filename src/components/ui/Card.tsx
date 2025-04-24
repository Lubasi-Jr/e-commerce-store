"use client";
import React from "react";
import Image from "next/image";

type CardProps = {
  product: Product;
};

const Card = ({ product }: CardProps) => {
  const { id, name, price, imageUrl } = product;

  const addProductCard = () => {
    //Logic for adding product to cart
    console.log("Product Added");
  };
  return (
    <div
      id="card"
      className="w-44 h-[500px] md:h-[530px] md:w-3xs flex flex-col items-start gap-3"
    >
      <div
        id="card-image"
        className="w-full h-60 md:h-80 relative hover:opacity-50 hover:shadow-md transition-all duration-300 cursor-pointer"
      >
        <Image src={imageUrl} alt={name} fill />
      </div>
      <h2
        id="product-name"
        className="h-8 md:h-2.5 w-full break-words font-inter font-semibold uppercase text-taka text-start"
      >
        {name}
      </h2>
      <h2
        id="price"
        className="h-2.5 w-full font-inter font-semibold uppercase text-taka text-start mb-9"
      >
        {price}
      </h2>
      <button
        onClick={() => addProductCard()}
        className="h-10 w-full border-1 border-taka px-2 md:px-4 py-2 text-taka text-center hover:text-white hover:bg-taka transition-colors duration-300 ease-in-out cursor-pointer"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Card;
