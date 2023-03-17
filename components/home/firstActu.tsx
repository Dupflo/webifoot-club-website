import Image from "next/image";
import Ball from "../../assets/home/ball.jpg";
import { Text, Title } from "../common/typography";
export default function FirstActu() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-md max-w-[60rem] md:h-[800px] ">
        <Image src={Ball} width="642" height="785" alt="" className="zoom w-full h-full object-cover" />
      </div>
      <div className="absolute left-0 bottom-0 m-5 md:m-10 flex flex-col gap-y-1">
        <Text size={Text.size.SMALL} color={Text.color.WHITE} className="flex flex-col gap-y-1" uppercase>
          <span>Inter Montréal</span>
          <span>20 Fév 2021</span>
        </Text>

        <Title size={Text.size.XXLARGE} color={Text.color.WHITE} uppercase>
          <p>Comment choisir ton club de foot au Québec ?</p>
        </Title>
      </div>
    </div>
  );
}
