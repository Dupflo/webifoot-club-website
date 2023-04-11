import { Archivo_Black } from "@next/font/google";
import classNames from "classnames";
import Image from "next/image";
import { Title } from "../typography";
const arial = Archivo_Black({ weight: "400", subsets: ["latin"] });
export default function Header({ data }: any) {
  return (
    <div className={classNames("relative h-screen w-full overflow-hidden", arial.className)}>
      <div className="absolute z-10 flex h-full w-full items-center justify-center">
        <span className="flex flex-col items-center">
          <Title color={Title.color.PRIMARY} size={Title.size.EXTRA} weight={Title.weight.BOLD} uppercase>
            {data.title}
          </Title>
          <Title
            size={Title.size.XXXLARGE}
            color={Title.color.PRIMARY}
            weight={Title.weight.BOLD}
            align={Title.align.CENTER}
            uppercase
          >
            <span className="outline-blue">{data.subtitle}</span>
          </Title>
        </span>
      </div>

      <Image src={data.image} fill alt="" className="h-full w-full object-cover opacity-60" />
    </div>
  );
}
