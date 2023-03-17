import { Text, Title } from "../common/typography";

export default function About() {
  return (
    <div className="py-16 bg-[#F7F7F8]">
      <div className=" max-w-container flex flex-col items-center justify-center gap-y-16 ">
        <Title size={Title.size.XXXLARGE} color={Title.color.PRIMARY} uppercase>
          Un club, une marque, un esprit
        </Title>
        <Text size={Text.size.LARGE} color={Text.color.DARK}>
          <span className="flex flex-col gap-y-8">
            <span>
              Fondée en 2020, l'Inter Montréal est un projet qui a pris naissance dans le cœur de trois passionnés de
              football : François, Raphaël et Benoît. Le soccer québécois ne cesse d’évoluer et le nombre de licenciés
              augmente chaque année. L’arrivée de la coupe du monde 2026 au Canada n’a fait que confirmer cette tendance
              et agit comme un accélérateur pour le soccer au Québec. La ville de Montréal est aujourd’hui un véritable
              terrain fertile pour les clubs qui souhaitent participer à son développement.{" "}
            </span>
            <span>
              Installés depuis plusieurs années au Québec et après avoir navigué dans différentes ligues et équipes de
              Montréal, les trois amis ont donc décidé de sauter le pas en créant leur propre club. Evoluant au sein de
              l'ARS Concordia, niveau A, l’idée est simple. Pousser le curseur un peu plus loin qu’une simple équipe de
              potes partageant une bière à la fin d’une rencontre. Et si l’esprit familial d’après-match et le partage
              reste des piliers du club, l’Inter de Montréal a bâti son projet sur ses ambitions sportives, un style
              travaillé et le plaisir de jouer dans un environnement bienveillant.
            </span>
            <span>Avoir un esprit professionnel dans un monde amateur. </span>
          </span>
        </Text>
      </div>
    </div>
  );
}
