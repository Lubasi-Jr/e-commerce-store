import React from "react";
import Details from "@/features/details/components/Details";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const uuid = params.id;
  //console.log(uuid);

  return (
    <>
      <Details uuid={uuid} />
    </>
  );
};

export default ProductDetails;
