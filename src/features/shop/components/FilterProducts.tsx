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
import Categories from "./Categories";

const FilterProducts = () => {
  // API call using react query
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [category, setCategory] = useState<string>("");
  const [decade, setDecade] = useState<string>("");

  const categoryChange = (val: string) => {
    setCategory(val);
    //Logic for calling API with filters
  };
  const decadeChange = (val: string) => {
    setDecade(val);
    //logic for calling API with filters
  };

  return (
    <>
      <Categories
        category={category}
        decade={decade}
        handleCategory={categoryChange}
        handleDecade={decadeChange}
        count={data?.length}
      />
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
