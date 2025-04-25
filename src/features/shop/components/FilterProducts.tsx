"use client";
import { motion } from "motion/react";
import React from "react";
import { useState } from "react";
import { bestSellers } from "@/features/home/constants";
import Card from "@/components/ui/Card";
import { Filter } from "lucide-react";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ListRestart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../database/queries";
import BlankCard from "./BlankCard";

const FilterProducts = () => {
  // API call using react query
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [decade, setDecade] = useState<string>("");

  const clearFilters = () => {
    //Reset filters
    setCategory("");
    setDecade("");
    //Call initial function for all products
  };
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
        <div
          id="radio-group-categories"
          className="flex gap-2 h-auto justify-start w-[150px] cursor-pointer flex-col mt-1.5 overflow-y-clip"
        >
          <p className="font-inter font-semibold">Category</p>
          <RadioGroup
            defaultValue=""
            value={category}
            onValueChange={(value: string) => setCategory(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vinyl" id="vinyl" />
              <Label htmlFor="vinyl" className="font-inter">
                Vinyls
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="turnable" id="turnable" />
              <Label htmlFor="turnable" className="font-inter">
                Turnables
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="instrument" id="instrument" />
              <Label htmlFor="instrument" className="font-inter">
                Instruments
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="poster" id="poster" />
              <Label htmlFor="poster" className="font-inter">
                Posters
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div
          id="radio-group-decade"
          className="flex gap-2 h-auto justify-start w-[150px] cursor-pointer flex-col mt-1.5 overflow-y-clip"
        >
          <p className="font-inter font-semibold">Decade</p>
          <RadioGroup
            defaultValue=""
            value={decade}
            onValueChange={(value: string) => setDecade(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1990" id="1990" />
              <Label htmlFor="1990" className="font-inter">
                Before 1990's
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1980" id="1980" />
              <Label htmlFor="1980" className="font-inter">
                Before 1980's
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1970" id="1970" />
              <Label htmlFor="1970" className="font-inter">
                Before 1970's
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1960" id="1960" />
              <Label htmlFor="1960" className="font-inter">
                Before 1960's
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div
          id="clear-filters"
          className="flex gap-1 h-5 justify-start w-[150px] cursor-pointer mt-2.5"
          onClick={() => clearFilters()}
        >
          <ListRestart size={20} color="#595667" />
          <p className="font-inter font-semibold">CLEAR FILTERS</p>
        </div>
      </motion.div>
      {/* Grid display */}
      {isLoading ? (
        <section
          id="products-grid"
          className="px-2.5 py-8 w-full min-h-screen grid grid-cols-1 gap-y-2 mt-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {bestSellers.map((item, index) => (
            <BlankCard key={index} />
          ))}
        </section>
      ) : (
        <section
          id="products-grid"
          className="px-2.5 py-8 w-full min-h-screen grid grid-cols-1 gap-y-2 mt-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data?.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </section>
      )}
    </>
  );
};

export default FilterProducts;
