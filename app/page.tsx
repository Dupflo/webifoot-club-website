import Hero from "@/components/home/hero";
import History from "@/components/home/history";
import News from "@/components/home/news";
import Tag from "@/components/home/tag";
// import { useLayoutContext } from "./Context/layout-context";
// const {layout} = useLayoutContext();
import { Archivo_Black } from "@next/font/google";
const arial = Archivo_Black({ weight: "400", subsets: ["latin"] });
export default function HomePage() {
  return (
    <div className={arial.className}>
      <Hero />
      <News />
      <Tag />
      <History />
    </div>
  );
}
