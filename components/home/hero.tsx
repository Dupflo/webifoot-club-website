"use client";
import Image from "next/image";
import More from "../../assets/home/more.png";
import Team from "../../assets/home/team.jpg";
import { Title } from "../common/typography";

export default function Hero() {
  return (
    <div className="max-w-container ajust-y relative mb-10 flex flex-col items-center justify-center">
      <Title color={Title.color.PRIMARY} weight={Title.weight.BOLD} align={Title.align.CENTER} uppercase>
        <span className="flex flex-col">
          <span className="text-[4rem] xl:text-[6.25rem]">Inter Montréal</span>
          <span className="outline-blue text-[2rem] xl:text-[3.125rem]">Le futur du football à Montréal</span>
        </span>
      </Title>
      <div className="w-full my-8 rounded-lg shadow-md overflow-hidden">
        <Image src={Team} alt="" className="object-cover zoom" />
      </div>
      <Image
        src={More}
        width="398"
        height="398"
        className="absolute right-6 bottom-0 w-[10rem] motion-safe:animate-spin-slow  xl:w-[15rem]"
        alt=""
      />
    </div>
  );
}
