"use client";
import React from "react";
import Image from "next/image";
import FilledSection from "./FilledSection";
import BlankSection from "./BlankSection";
import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "../database/detailsQueries";

const Details = ({ uuid }: { uuid: string }) => {
  const { data, isLoading, error } = useQuery<Details>({
    queryKey: ["details", uuid],
    queryFn: () => fetchDetails(uuid),
  });

  console.log(data);

  if (isLoading) return <BlankSection />;
  return data ? <FilledSection {...data} /> : <BlankSection />;
};

export default Details;
