import Header from "@/components/common/header/header";
import LittleNews from "@/components/common/littleNews";

export default async function NewsPage() {
const response = await import(`../../public/news.json`);
let news = response.default;

  return (
    <>
      <Header data={news.header} />
      <div className="bg-primary p-5">
        <LittleNews />
      </div>
    </>
  );
}
