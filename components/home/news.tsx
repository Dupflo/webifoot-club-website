"use client";
import FirstActu from "./firstActu";
import SecondActu from "./secondActu";
import { Title } from "../common/typography";

import Button from "../common/button";
export default function News() {
  return (
    <div className="bg-primary md:ajust-y">
      <div className="max-w-container ajust-y">
        <div className="flex items-center justify-between">
          <Title
            size={Title.size.XXXLARGE}
            color={Title.color.WHITE}
            weight={Title.weight.BOLD}
            align={Title.align.LEFT}
            uppercase
          >
            <span className="flex flex-col gap-y-2">
              <span>Actualités</span>
              <span className="sm:ml-[5rem] outline-red">Nouveautés</span>
            </span>
          </Title>
          <Button title={"Voir nos actus"} />
        </div>
        <div className="flex flex-col gap-20 pt-16 lg:flex-row lg:items-start lg:justify-center">
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
