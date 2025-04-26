import React from "react";
import Details from "@/features/details/components/Details";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  let param = await params;
  const uuid = param.id;
  //console.log(uuid);

  return (
    <>
      <Details uuid={uuid} />
    </>
  );
};

export default ProductDetails;
