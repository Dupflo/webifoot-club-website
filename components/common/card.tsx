"use client";
import Image from "next/image";
import { Text, Title } from "./typography";

interface CardProps {
  data: {
    role: string;
    name: string;
    about: string;
    image: string;
  };
}

export default function Card({ data }: CardProps) {
  return (
    <div className="relative  h-[50rem] w-full max-w-[30rem] overflow-hidden xl:h-[51rem] ">
      <span className="absolute z-40 flex h-full w-full flex-col justify-end gap-2 pr-10 pb-10 pl-5">
        <Title color={Title.color.WHITE} size={Title.size.XXLARGE} weight={Title.weight.BOLD} uppercase>
          {data.role}
        </Title>
        <Text color={Text.color.WHITE} size={Text.size.XXLARGE} weight={Text.weight.LIGHT} uppercase>
          {data.name}
        </Text>
        <Text color={Text.color.WHITE} size={Text.size.LARGE} weight={Text.weight.LIGHT}>
          {data.about}
        </Text>
      </span>
      <Image src={data.image} alt="" fill className="h-full w-full object-cover" />
    </div>
  );
}
