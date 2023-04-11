"use client";
import { HiArrowRight } from "react-icons/hi";
import { Text } from "../typography";
export default function Button(props: any) {
  return (
    <div className="p-5">
      <Text size={Text.size.MEDIUM} color={Text.color.WHITE} weight={Text.weight.BOLD} align={Text.align.LEFT}>
        <span className="flex items-center gap-x-1 sm:gap-x-2">
          <span>{props.title}</span>
          <HiArrowRight className="translate-y-0.5 cursor-pointer text-base duration-150 ease-in hover:translate-x-2 sm:text-xl" />
        </span>
      </Text>
    </div>
  );
}
