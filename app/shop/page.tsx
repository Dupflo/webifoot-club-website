"use client";
import Pagination from "@/components/common/button/pagination";
import HeaderBis from "@/components/common/header/headerBis";
import SideBarShop from "@/components/common/sidebar/sidebar-shop";
import { useEffect } from "react";
import { useLayoutContext } from "../Context/layout-context";
export default function ShopPage() {
  const { setLayout } = useLayoutContext();

  useEffect(() => {
    setLayout("bis");
  });

  const Head = {
    name: "Inter Montreal",
    title: "Boutique du club",
  };
  return (
    <div className="bg-white">
      <HeaderBis data={Head} />

      <div className="max-w-container">
        <div className="flex ">
          <SideBarShop />
        </div>
        <Pagination />
      </div>
    </div>
  );
}
