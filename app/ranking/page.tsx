import FlyOut from "@/components/common/flyout-menu";
import HeaderBis from "@/components/common/header/headerBis";
import TableRanking from "@/components/common/table";

const Compo = {
  name: "Classement",
  title: "équipe masculin sénior A",
};
const FlyOutContent = [
  {
    active: "équipe féminine sénior A",
    solutions: [{ value: "équipe masculin sénior A" }, { value: "équipe masculin sénior B" }],
  },
  { active: "2022 / 2023", solutions: [{ value: "2021 / 2022" }, { value: "2020 / 2021" }] },
];

export default function RankingPage() {
  return (
    <div className="bg-white ">
      <div className="max-w-container">
        <HeaderBis data={Compo} />
        <div className="flex flex-col sm:flex-row gap-5 sm:px-10">
          {FlyOutContent.map((content) => (
            <FlyOut key={content.active} data={content} />
          ))}
        </div>
        <TableRanking />
      </div>
    </div>
  );
}
