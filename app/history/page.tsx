import Articles from "@/components/common/articles";
import Header from "@/components/common/header/header";

export default async function HistoryPage() {
  const response = await import(`../../public/history.json`);
  let history = response.default;
  return (
    <>
      <Header data={history.header} />
      {history.articles.map((el: any) => (
        <Articles data={el} />
      ))}
    </>
  );
}
