import Image from "next/image";
import { Text, Title } from "./typography";

export default function Articles({ data }: any) {
  return (
    <div className={data.id == 0 ? "bg-[#F7F7F8] py-16" : "bg-white"}>
      <div className="max-w-container ajust-y flex flex-col items-center gap-10 lg:flex-row ">
        <div
          className={data.id == 0 ? "hidden" : data.id % 2 == 0 ? "img-art-property lg:order-last" : "img-art-property"}
        >
          <Image
            src={data.image}
            alt=""
            width={1313}
            height="1858"
            className="h-full w-full -translate-y-[100px] object-cover sm:-translate-y-[200px] lg:translate-y-0"
          />
        </div>
        <span className="flex flex-col gap-y-8">
          <Title size={Title.size.XXXLARGE} color={Title.color.PRIMARY} uppercase>
            {data.title}
          </Title>
          <Text size={Text.size.LARGE} color={Text.color.DARK}>
            <span className="flex flex-col gap-y-8">
              <span>{data.para_1}</span>
              <span>{data.para_2}</span>
              <span>{data.para_3}</span>
            </span>
          </Text>
        </span>
      </div>
    </div>
  );
}
