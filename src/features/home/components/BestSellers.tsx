import React from "react";
import Card from "@/components/ui/Card";
import { bestSellers } from "@/features/home/constants";

const BestSellers = () => {
  return (
    <>
      <h1 className="font-garamond font-bold text-center text-3xl mt-4 mb-4">
        BEST SELLERS
      </h1>
      <section
        id="best-selling cards"
        className="w-full h-auto px-5 md:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2.5 gap-y-14 md:gap-x-8"
      >
        {bestSellers.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </section>
    </>
  );
};

export default BestSellers;
