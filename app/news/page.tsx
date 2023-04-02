import Header from "@/components/common/header/header";
import LittleNews from "@/components/common/littleNews";

  const header = { title: "Actualités", subtitle: "Nouveautés", image : "http://localhost:3000/img/news/foot.jpg" }


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
