"use client";
import Image from "next/image";
import Berthier from "../../assets/staff/berthier.jpg";
import Clavel from "../../assets/staff/clavel.jpg";
import Iscar from "../../assets/staff/iscar.jpg";
import { Text, Title } from "../common/typography";

export default function Card(props: any) {
  return (
    <div className="relative max-h-[35rem] max-w-[30rem] overflow-hidden xl:max-h-[51rem] ">
      <span className="absolute flex h-full w-full flex-col justify-end gap-2 pr-10 pb-10 pl-5">
        <Title color={Title.color.WHITE} size={Title.size.XXLARGE} weight={Title.weight.BOLD} uppercase>
          {props.role}
        </Title>
        <Text color={Text.color.WHITE} size={Text.size.XXLARGE} weight={Text.weight.LIGHT} uppercase>
          {props.name}
        </Text>
        <Text color={Text.color.WHITE} size={Text.size.LARGE} weight={Text.weight.LIGHT}>
          {props.about}
        </Text>
      </span>
      <Image
        src={props.id == 0 ? Clavel : props.id == 1 ? Berthier : Iscar}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  );
}
