import Articles from "@/components/common/articles";
import Header from "@/components/common/header";

export default async function HistoryPage() {
  const response = await import(`../../pages/api/history.json`);
  let history = response.default;
  return (
    <>
      <Header title={history.header.title} subtitle={history.header.subtitle} image={history.header.image} />
      {history.articles.map((el: any) => (
        <Articles
          data={el}
        />
      ))}
    </>
  );
}
