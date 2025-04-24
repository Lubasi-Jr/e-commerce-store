"use client";
import { motion } from "motion/react";
import React from "react";
import { useState } from "react";
import { bestSellers } from "@/features/home/constants";
import Card from "@/components/ui/Card";
import { Filter } from "lucide-react";
import { X } from "lucide-react";

const FilterProducts = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  return (
    <>
      <section
        id="filter"
        className="w-full px-2.5 py-2.5 sm:px-6 h-16 flex flex-col items-start justify-between gap-3.5"
      >
        <div
          id="filter-icon"
          className="flex gap-1 h-5 justify-start w-[150px] cursor-pointer"
          onClick={() => setFilterOpen((prev) => !prev)}
        >
          <Filter size={20} color="#595667" />
          <p className="font-inter font-semibold">FILTER</p>
        </div>
        <p className="font-inter font-semibold">Showing 4 items</p>
      </section>
      {/* Pop up for filters */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: filterOpen ? 500 : 0, opacity: filterOpen ? 1 : 0 }}
        className={`w-full bg-white border-b-2 border-taka absolute top-0 z-10 overflow-hidden px-2.5 py-6 sm:px-6 flex flex-col items-start justify-items-start ${
          filterOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          id="close-icon"
          className="flex gap-1 h-5 justify-start w-[150px] cursor-pointer"
          onClick={() => setFilterOpen((prev) => !prev)}
        >
          <X size={20} color="#595667" />
          <p className="font-inter font-semibold">CLOSE</p>
        </div>
      </motion.div>
      {/* Grid display */}
      <section
        id="products-grid"
        className="px-2.5 py-8 w-full min-h-screen grid grid-cols-1 gap-y-2 mt-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {bestSellers.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </section>
    </>
  );
};

export default FilterProducts;
