import classNames from "classnames";
import Result from "../result";
import { Text } from "../typography";

export default function CalendarTable({ data }: any) {
  return (
    <div className="py-10 sm:px-10">
      <div className=" overflow-x-auto bg-primary pt-3 pl-10 md:pl-40">
        <div className="flex gap-x-10">
          {data.date.map((el: any) => (
            <span className={classNames(el.selected ? "border-b-4 border-white" : null, "pb-3")}>
              <a href="">
                <Text
                  size={Text.size.NORMAL}
                  weight={el.selected ? Text.weight.SEMIBOLD : Text.weight.NORMAL}
                  color={Text.color.WHITE}
                >
                  {el.month}
                </Text>
              </a>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2 py-2">
        {data.matchs.map((match: any) => (
          <Result key={match.id} data={match} />
        ))}
      </div>
    </div>
  );
}
