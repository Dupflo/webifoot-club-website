import Articles from "@/components/common/articles";
import Header from "@/components/common/header";
import Tribune from "../../assets/history/tribune.jpg";

export default async function HistoryPage() {
  const response = await import(`../../pages/api/app.json`);
  let header = response.default.header;
  let history = response.default.history;
  return (
    <>
      <Header title={header.history.title} subtitle={header.history.subtitle} image={Tribune} />
      {history.map((el: any) => (
        <Articles id={el.id} title={el.title} para_1={el.para_1} para_2={el.para_2} para_3={el.para_3} />
      ))}
    </>
  );
}
