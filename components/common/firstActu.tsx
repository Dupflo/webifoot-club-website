import Image from "next/image";
import Ball from "../../assets/home/ball.jpg";
import { Text, Title } from "../common/typography";
export default function FirstActu() {
  return (
    <div className="relative">
      <div className="sm:w-[32rem] overflow-hidden rounded-md 2xl:w-[40rem]">
        <Image src={Ball} width="642" height="785" alt="" className="object-cover zoom" />
      </div>
      <div className="absolute left-0 bottom-0 flex flex-col gap-y-1 m-10">
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
