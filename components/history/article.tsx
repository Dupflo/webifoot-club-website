import Image from "next/image";
import Player from "../../assets/history/player.jpg";
import { Text, Title } from "../common/typography";
export default function Article() {
  return (
    <div className="bg-white ">
      <div className="max-w-container ajust-y flex flex-col items-center gap-10 lg:flex-row ">
        <div className="h-full max-h-[200px] w-full overflow-hidden sm:max-h-[400px] sm:max-w-[1200px] lg:min-h-[550px] lg:min-w-[400px]">
          <Image
            src={Player}
            alt=""
            className="h-full w-full -translate-y-[100px] object-cover sm:-translate-y-[200px] lg:translate-y-0"
          />
        </div>
        <span className="flex flex-col gap-y-8">
          <Title size={Title.size.XXXLARGE} color={Title.color.PRIMARY} uppercase>
            Un club
          </Title>
          <Text size={Text.size.LARGE} color={Text.color.DARK}>
            <span className="flex flex-col gap-y-8">
              <span>
                Fondée en 2020, l'Inter Montréal est un projet qui a pris naissance dans le cœur de trois passionnés de
                football : François, Raphaël et Benoît. Le soccer québécois ne cesse d’évoluer et le nombre de licenciés
                augmente chaque année. L’arrivée de la coupe du monde 2026 au Canada n’a fait que confirmer cette
                tendance et agit comme un accélérateur pour le soccer au Québec. La ville de Montréal est aujourd’hui un
                véritable terrain fertile pour les clubs qui souhaitent participer à son développement.{" "}
              </span>
              <span>
                Installés depuis plusieurs années au Québec et après avoir navigué dans différentes ligues et équipes de
                Montréal, les trois amis ont donc décidé de sauter le pas en créant leur propre club. Evoluant au sein
                de l'ARS Concordia, niveau A, l’idée est simple. Pousser le curseur un peu plus loin qu’une simple
                équipe de potes partageant une bière à la fin d’une rencontre. Et si l’esprit familial d’après-match et
                le partage reste des piliers du club, l’Inter de Montréal a bâti son projet sur ses ambitions sportives,
                un style travaillé et le plaisir de jouer dans un environnement bienveillant.
              </span>
              <span>Avoir un esprit professionnel dans un monde amateur. </span>
            </span>
          </Text>
        </span>
      </div>

      <div className="max-w-container ajust-y flex flex-col items-center gap-10 lg:flex-row ">
        <div className="order-last h-full max-h-[200px] w-full overflow-hidden sm:max-h-[400px] sm:max-w-[1200px] lg:min-h-[550px] lg:min-w-[400px]">
          <Image
            src={Player}
            alt=""
            className="h-full w-full -translate-y-[100px] object-cover sm:-translate-y-[200px] lg:translate-y-0"
          />
        </div>
        <span className="flex flex-col gap-y-8">
          <Title size={Title.size.XXXLARGE} color={Title.color.PRIMARY} uppercase>
            Un club
          </Title>
          <Text size={Text.size.LARGE} color={Text.color.DARK}>
            <span className="flex flex-col gap-y-8">
              <span>
                Fondée en 2020, l'Inter Montréal est un projet qui a pris naissance dans le cœur de trois passionnés de
                football : François, Raphaël et Benoît. Le soccer québécois ne cesse d’évoluer et le nombre de licenciés
                augmente chaque année. L’arrivée de la coupe du monde 2026 au Canada n’a fait que confirmer cette
                tendance et agit comme un accélérateur pour le soccer au Québec. La ville de Montréal est aujourd’hui un
                véritable terrain fertile pour les clubs qui souhaitent participer à son développement.{" "}
              </span>
              <span>
                Installés depuis plusieurs années au Québec et après avoir navigué dans différentes ligues et équipes de
                Montréal, les trois amis ont donc décidé de sauter le pas en créant leur propre club. Evoluant au sein
                de l'ARS Concordia, niveau A, l’idée est simple. Pousser le curseur un peu plus loin qu’une simple
                équipe de potes partageant une bière à la fin d’une rencontre. Et si l’esprit familial d’après-match et
                le partage reste des piliers du club, l’Inter de Montréal a bâti son projet sur ses ambitions sportives,
                un style travaillé et le plaisir de jouer dans un environnement bienveillant.
              </span>
              <span>Avoir un esprit professionnel dans un monde amateur. </span>
            </span>
          </Text>
        </span>
      </div>
    </div>
  );
}
