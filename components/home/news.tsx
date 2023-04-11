"use client";
import BigNews from "../common/bigNews";
import Button from "../common/button/button";
import LittleNews from "../common/littleNews";
import { Title } from "../common/typography";
export default function News() {
  return (
    <div className="md:ajust-y bg-primary">
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
              <span className="outline-red sm:ml-[5rem]">Nouveautés</span>
            </span>
          </Title>
          <Button title={"Voir nos actus"} />
        </div>
        <div className="flex flex-col gap-20 pt-16 lg:flex-row lg:items-start lg:justify-center">
          <BigNews />
          <div className="flex flex-col gap-y-5">
            <LittleNews />
            <LittleNews />
          </div>
        </div>
      </div>
    </div>
  );
}
