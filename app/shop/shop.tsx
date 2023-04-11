"use client";
import Pagination from "@/components/common/button/pagination";
import GridShop from "@/components/common/grid-shop";
import HeaderBis from "@/components/common/header/headerBis";
import SideBarShop from "@/components/common/sidebar/sidebar-shop";
import { useEffect } from "react";
import { useLayoutContext } from "../Context/layout-context";
export default function Shop({ data }: any) {
  const { setLayout } = useLayoutContext();

  useEffect(() => {
    setLayout("bis");
  });

  return (
    <div className="bg-white">
      <HeaderBis data={data} />
      <div className="max-w-container">
        <div className="flex">
          <SideBarShop component={<GridShop data={data} />} />
        </div>
        <Pagination />
      </div>
    </div>
  );
}
