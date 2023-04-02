"use client";

import ButtonBlue from "@/components/common/button/button-blue";
import FlyOut from "@/components/common/flyout-menu";
import HeaderBis from "@/components/common/header/headerBis";
import RankingTable from "@/components/common/table/ranking-table";
import { useEffect } from "react";
import { useLayoutContext } from "../Context/layout-context";

const Head = {
  name: "Classement",
  title: "équipe masculin sénior A",
};
const FlyOutContent = [
  {
    active: "équipe masculin sénior A",
    solutions: [{ value: "équipe féminine sénior A" }, { value: "équipe masculin sénior B" }],
  },
  { active: "2022 / 2023", solutions: [{ value: "2021 / 2022" }, { value: "2020 / 2021" }] },
];

export default function RankingPage() {
  const { setLayout } = useLayoutContext();

  useEffect(() => {
    setLayout("bis");
  });

  return (
    <div className="bg-white ">
      <div className="max-w-container">
        <HeaderBis data={Head} />
        <div className="flex flex-col gap-5 sm:flex-row sm:px-10">
          {FlyOutContent.map((content) => (
            <FlyOut key={content.active} data={content} />
          ))}
        </div>
        <RankingTable />
        <div className="flex justify-center py-10">
          <ButtonBlue link="/calendar" data={"Voir les calendriers et résultats "} />
        </div>
      </div>
    </div>
  );
}
