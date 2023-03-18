import Header from "@/components/common/header";
import Tribune from "../../assets/history/tribune.jpg";
import About from "@/components/history/about";
import Article from "@/components/history/article";

export default async function HistoryPage() {
  const response = await import(`../../pages/api/app.json`);
  let header = response.default.header;
  return (
    <>
      <Header title={header.history.title} subtitle={header.history.subtitle} image={Tribune} />
      <About/>
      <Article/>
    </>
  );
}
