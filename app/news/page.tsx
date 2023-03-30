import Header from "@/components/common/header/header";
import LittleNews from "@/components/common/littleNews";
export default async function NewsPage() {
  const response = await import(`../../pages/api/news.json`);
  const news = response.default;
  return (
    <>
      <Header title={news.header.title} subtitle={news.header.subtitle} image={news.header.image} />
      <div className="bg-primary p-5">
        <LittleNews />
      </div>
    </>
  );
}
