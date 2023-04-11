import { Text } from "./typography";

export default function Result({ data }: any) {
  return (
    <div className=" flex flex-col gap-y-5 bg-gray p-5">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-8">
          <div className="flex w-full justify-end">
            <Text size={Text.size.SMALL} weight={Text.weight.SEMIBOLD} color={Text.color.PRIMARY}>
              {data.day}
            </Text>
          </div>
          <div className="flex flex-row justify-center">
            <Text size={Text.size.SMALL} weight={Text.weight.NORMAL} color={Text.color.PRIMARY}>
              {data.time}
            </Text>
          </div>
          <div className="flex w-full justify-start">
            <Text size={Text.size.SMALL} weight={Text.weight.SEMIBOLD} color={Text.color.PRIMARY}>
              {data.stadium}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex gap-x-10">
        <span className="flex w-full flex-col items-center justify-center gap-x-3 md:flex-row md:justify-end">
          <span className="hidden sm:order-last sm:block md:order-first">
            <Text size={Text.size.LARGE} weight={Text.weight.MEDIUM} color={Text.color.PRIMARY}>
              {data.local}
            </Text>
          </span>
          <div className="h-20 w-20 flex-shrink-0">
            <img className="h-full w-full object-contain" src={data.logoLocal} alt="" />
          </div>
        </span>
        <div className="flex items-center justify-center">
          <Text size={Text.size.LARGE} weight={Text.weight.BOLD} color={Text.color.PRIMARY}>
            <span className="flex gap-2">
              {data.localGoal}
              <span>-</span>
              {data.visitGoal}
            </span>
          </Text>
        </div>
        <span className="flex w-full flex-col items-center justify-center gap-x-3 md:flex-row md:justify-start">
          <span className="hidden sm:order-last sm:block">
            <Text size={Text.size.LARGE} weight={Text.weight.MEDIUM} color={Text.color.PRIMARY}>
              {data.visit}
            </Text>
          </span>
          <div className="h-20 w-20 flex-shrink-0 ">
            <img className="h-full w-full object-contain" src={data.logoVisit} alt="" />
          </div>
        </span>
      </div>
    </div>
  );
}
