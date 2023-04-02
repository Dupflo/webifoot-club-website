"use client";
import { useLayoutContext } from "@/app/Context/layout-context";
import ShoppingComponent from "@/components/common/shopping";
import { useEffect } from "react";
export default function ShoppingPage() {
  const { setLayout } = useLayoutContext();

  useEffect(() => {
    setLayout("bis");
  });

  return (
    <div className="bg-white">
      <div className="max-w-container pt-20 sm:pt-24">
        <ShoppingComponent />
      </div>
    </div>
  );
}
