import Image from "next/image";
import Actu from "../../assets/home/actu.jpg";
import { Text, Title } from "../common/typography";
export default function SecondActu() {
  return (
    <div>
      <div className="sm:w-[32rem] lg:w-[24rem] 2xl:w-[36rem] overflow-hidden">
        <Image src={Actu} width="1150" height="582" alt="" className="object-cover zoom" />
      </div>
      <span className="flex flex-col gap-y-1 py-2">
        <Title
          size={Title.size.LARGE}
          color={Title.color.WHITE}
          weight={Title.weight.BOLD}
          align={Title.align.LEFT}
          uppercase
        >
          Titre actualité
        </Title>
        <Text size={Text.size.NORMAL} color={Text.color.WHITE} align={Text.align.LEFT}>
          01 janv 2023
        </Text>
      </span>
    </div>
  );
}
