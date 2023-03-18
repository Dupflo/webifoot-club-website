import Hero from "@/components/home/hero";
import History from "@/components/home/history";
import News from "@/components/home/news";
import Tag from "@/components/home/tag";

export default async function HomePage() {
const response = await import(`../pages/api/app.json`);
let data = response.default;
  console.log(data)
  return (
    <>
      <Hero />
      <News />
      <Tag />
      <History />
    </>
  );
}


