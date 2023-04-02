"use client"
import ProductOverview from "@/components/common/product-overview";
import HeaderBis from "@/components/common/header/headerBis";
import { useEffect } from "react";
import { useLayoutContext } from "@/app/Context/layout-context";

export default function ProductPage() {
 const Head = {
   name: "Inter Montreal",
   title: "Boutique du club",
 };

 const { setLayout } = useLayoutContext();

 useEffect(() => {
   setLayout("bis");
 });

 return (
   <div className="bg-white">
     <HeaderBis data={Head} />
     <div className="max-w-container">
       <ProductOverview />
     </div>
   </div>
 );
}
