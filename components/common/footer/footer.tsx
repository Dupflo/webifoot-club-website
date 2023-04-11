"use client";
import { useLayoutContext } from "@/app/Context/layout-context";
import FooterFirst from "./footerFirst";
import FooterBis from "./footerBis";

export default function Navigation({ data }: any) {
  const { layout } = useLayoutContext();
  return <>{layout == "bis" ? <FooterBis data={data} /> : <FooterFirst data={data} />}</>;
}
