"use client";
import { useLayoutContext } from "@/app/Context/layout-context";
import NavBis from "./navBis";
import NavFirst from "./navFirst";

export default function Navigation({ data }: any) {
  const { layout } = useLayoutContext();
  return <>{layout == "bis" ? <NavBis data={data} /> : <NavFirst data={data} />}</>;
}
