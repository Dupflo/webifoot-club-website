"use client";
import { HiArrowRight } from "react-icons/hi";
import { Text } from "./typography";
export default function Button(props : any) {
  return (
    <div className="p-5">
      <Text size={Text.size.MEDIUM} color={Text.color.WHITE} weight={Text.weight.BOLD} align={Text.align.LEFT}>
        <span className="flex items-center gap-x-2">
          <span>{props.title}</span>
          <HiArrowRight size={25} className="translate-y-0.5 hover:translate-x-2 duration-150 ease-in cursor-pointer" />
        </span>
      </Text>
    </div>
  );
}
