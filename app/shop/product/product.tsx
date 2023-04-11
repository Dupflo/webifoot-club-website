"use client";
import ProductOverview from "@/components/common/product-overview";
import HeaderBis from "@/components/common/header/headerBis";
import { useEffect } from "react";
import { useLayoutContext } from "@/app/Context/layout-context";

export default function Product({data}:any) {

  const { setLayout } = useLayoutContext();

  useEffect(() => {
    setLayout("bis");
  });

  return (
    <div className="bg-white">
      <HeaderBis data={data} />
      <div className="max-w-container">
        <ProductOverview data={data} />
      </div>
    </div>
  );
}
