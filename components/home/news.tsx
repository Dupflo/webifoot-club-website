"use client";
import FirstActu from "../common/firstActu";
import SecondActu from "../common/secondActu";
import { Title } from "../common/typography";

import Button from "../common/button";
export default function News() {
  return (
    <div className="bg-secondary ">
      <div className="max-w-container ajust-y">
        <div className="flex items-center justify-between">
          <Title
            size={Title.size.EXTRA}
            color={Title.color.WHITE}
            weight={Title.weight.BOLD}
            align={Title.align.LEFT}
            uppercase
          >
            <span className="flex flex-col gap-y-2">
              <span>Actualités</span>
              <span className="ml-[5rem] outline-red">Nouveautés</span>
            </span>
          </Title>
          <Button title={"Voir nos actus"} />
        </div>
        <div className="flex flex-col items-center gap-y-10 pt-16 lg:flex-row lg:items-start lg:justify-around">
          <FirstActu />
          <div className="flex flex-col gap-y-10">
            <SecondActu />
            <SecondActu />
          </div>
        </div>
      </div>
    </div>
  );
}
