import { Poppins } from "@next/font/google";
import classNames from "classnames";
import Image from "next/image";
import team from "../../public/img/home/team-inter.jpg";
import Button from "../common/button";
import { Text, Title } from "../common/typography";
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function History() {
  return (
    <div className="bg-primary ">
      <div className="max-w-container flex h-[550px] flex-col p-0 sm:h-[600px] md:h-[650px]  lg:flex-row">
        <div className="relative max-h-[300px] max-w-[1200px] lg:max-h-[700px] lg:max-w-[600px]">
          <Image src={team} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-around gap-5 p-10 px-10 lg:justify-center lg:gap-10 xl:pl-40">
          <Title
            size={Title.size.XXXLARGE}
            color={Title.color.WHITE}
            weight={Title.weight.BOLD}
            align={Title.align.LEFT}
            uppercase
          >
            L'Inter Montréal
          </Title>
          <Text
            size={Text.size.MEDIUM}
            color={Title.color.WHITE}
            weight={Title.weight.BOLD}
            className={classNames(poppins.className)}
          >
            Fondée en 2020, l’Inter Montréal est un projet qui a pris naissance dans le cœur de trois passionnés de
            football : François, Raphaël et Benoît. Le soccer québécois ne cesse d’évoluer et le nombre de licenciés
            augmente chaque année. L’arrivée de la coupe du monde 2026 au Canada n’a fait que confirmer cette tendance
            et agit comme un accélérateur pour le soccer au Québec…
          </Text>

          <div className="flex justify-end">
            <Button title={"Histoire du club"} />
          </div>
        </div>
      </div>
    </div>
  );
}
