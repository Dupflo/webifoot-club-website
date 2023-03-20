import Image from "next/image";
import Player from "../../assets/history/player.jpg";
import { Text, Title } from "./typography";

export default function Articles(props: any) {
  return (
    <div className={props.id == 0 ? "bg-[#F7F7F8] py-16" : "bg-white"}>
      <div className="max-w-container ajust-y flex flex-col items-center gap-10 lg:flex-row ">
        <div
          className={props.id == 0 ? "hidden" : props.id % 2 == 0 ? "img-art-property lg:order-last" : "img-art-property"}
        >
          <Image
            src={Player}
            alt=""
            className="h-full w-full -translate-y-[100px] object-cover sm:-translate-y-[200px] lg:translate-y-0"
          />
        </div>
        <span className="flex flex-col gap-y-8">
          <Title size={Title.size.XXXLARGE} color={Title.color.PRIMARY} uppercase>
            {props.title}
          </Title>
          <Text size={Text.size.LARGE} color={Text.color.DARK}>
            <span className="flex flex-col gap-y-8">
              <span>{props.para_1}</span>
              <span>{props.para_2}</span>
              <span>{props.para_3}</span>
            </span>
          </Text>
        </span>
      </div>
    </div>
  );
}
