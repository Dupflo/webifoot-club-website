import { Poppins } from "@next/font/google";
import classNames from "classnames";
import Image from "next/image";
import history from "../../assets/home/history.jpg";
import Button from "../common/button";
import { Text, Title } from "../common/typography";
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function History() {
  return (
    <div className="bg-secondary ">
      <div className="max-w-container p-0 flex px-20">
        <div className="relative h-full w-full max-w-[491px]">
          <Image src={history} alt="" className="object-cover h-[500px]" />
        </div>
        <div className="flex flex-col justify-center gap-10 p-5 xl:pl-20 2xl:pl-40">
          <Title
            size={Title.size.EXTRA}
            color={Title.color.WHITE}
            weight={Title.weight.BOLD}
            align={Title.align.LEFT}
            uppercase
          >
            L'Inter Montréal
          </Title>
          <Text color={Title.color.WHITE} weight={Title.weight.BOLD} className={classNames(poppins.className)}>
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
