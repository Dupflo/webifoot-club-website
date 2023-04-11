import { Title } from "../common/typography";

export default function Tag() {
  return (
    <span className="">
      <Title color={Title.color.PRIMARY} uppercase>
        <span className=" max-w-container ajust-y flex flex-col gap-y-10">
          <span className="flex items-center justify-center gap-x-5 md:gap-x-20">
            <span className="goalTag text-[#E7455B]">Goal</span>
            <span className="teamTag">Inter Montréal</span>
          </span>
          <span className="flex items-center justify-center gap-x-5 md:gap-x-20">
            <span className="goalTag text-[#E7455B]">Goal</span>
            <span className="teamTag">Inter Montréal</span>
          </span>
          <span className="flex items-center justify-center gap-x-5 md:gap-x-20">
            <span className="goalTag outline-red">Goal</span>
            <span className="outline-blue teamTag">Inter Montréal</span>
          </span>
          <span className="flex items-center justify-center gap-x-5 md:gap-x-20">
            <span className="goalTag outline-red">Goal</span>
            <span className="outline-blue teamTag">Inter Montréal</span>
          </span>
        </span>
      </Title>
    </span>
  );
}
