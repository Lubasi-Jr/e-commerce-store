import React from "react";
import Details from "@/features/details/components/Details";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  //const uuid = params.id;
  //console.log(uuid);

  return (
    <>
      <Details uuid={id} />
    </>
  );
};

export default ProductDetails;
