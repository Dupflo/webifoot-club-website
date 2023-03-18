"use client";
import Image from "next/image";
import More from "../../assets/home/more.png";
import Team from "../../assets/home/team-hero.jpg";
import { Title } from "../common/typography";

export default function Hero() {
  return (
    <div className="max-w-container relative flex flex-col items-center justify-center mt-24 md:mt-40">
      <Title
        size={Title.size.EXTRA}
        color={Title.color.PRIMARY}
        weight={Title.weight.BOLD}
        align={Title.align.CENTER}
        uppercase
      >
        <span>Inter Montréal</span>
      </Title>
      <Title
        size={Title.size.XXXLARGE}
        color={Title.color.PRIMARY}
        weight={Title.weight.BOLD}
        align={Title.align.CENTER}
        uppercase
      >
        <span className="outline-blue">Le futur du football à Montréal</span>
      </Title>
      <div className="my-8 flex max-h-[200px] w-full items-center overflow-hidden rounded-lg shadow-md sm:max-h-[600px]">
        <Image src={Team} alt="" className="zoom h-full w-full scale-125 object-cover sm:scale-110" />
      </div>
      <div className="rounded-full">
        <Image
          src={More}
          width="398"
          height="398"
          className="absolute right-8 bottom-10 w-[5rem] motion-safe:animate-spin-slow sm:w-[8rem] md:bottom-5 md:right-10 xl:bottom-0 xl:w-[12rem] "
          alt=""
        />
      </div>
    </div>
  );
}
