import Image from "next/image";
import Actu from "../../public/img/home/actu.jpg";
import { Text, Title } from "./typography";
export default function LittleNews() {
  return (
    <>
      <div className=" overflow-hidden  lg:max-w-[30rem] 2xl:max-w-[36rem]">
        <Image src={Actu} alt="" className="zoom h-full w-full object-cover" />
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
    </>
  );
}
