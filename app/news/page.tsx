import SecondActu from "@/components/home/secondActu";
import Header from "@/components/common/header";
import Foot from "../../assets/news/foot.jpg";
export default async function NewsPage() {
  const response = await import(`../../pages/api/app.json`);
  let header = response.default.header;
  return (
    <>
      <Header title={header.news.title} subtitle={header.news.subtitle} image={Foot} />
      <SecondActu />
    </>
  );
}
