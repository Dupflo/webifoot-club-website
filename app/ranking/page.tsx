import Ranking from "./ranking";
export default async function RankingPage() {
  const response = await import(`../../public/ranking.json`);
  let ranking = response.default;

  return (
    <>
      <Ranking data={ranking} />
    </>
  );
}
