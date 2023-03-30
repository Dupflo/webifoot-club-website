import { Prompt } from "@next/font/google";
import classNames from "classnames";
import { Title } from "../typography";
const prompt = Prompt({
  weight: "300",
  subsets: ["latin"],
});
export default function HeaderBis({ data }: any) {
  return (
    <div
      className={classNames(
        prompt.className,
        "relative flex h-[50vh] items-center justify-center pt-24 tracking-widest"
      )}
    >
      <Title size={Title.size.XEXTRA} weight={Title.weight.LIGHT} color={Title.color.GRAY} uppercase>
        {data.name}
      </Title>
      <span className="absolute top-0 left-0 flex h-full w-full items-center justify-center pt-24">
        <Title size={Title.size.XXXLARGE} weight={Title.weight.LIGHT} color={Title.color.DARK} uppercase>
          {data.title}
        </Title>
      </span>
    </div>
  );
}
