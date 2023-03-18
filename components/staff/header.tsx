import Image from "next/image";
import Berthier from "../../assets/staff/berthier.jpg";
import Clavel from "../../assets/staff/clavel.jpg";
import Field from "../../assets/staff/field.jpg";
import Iscar from "../../assets/staff/iscar.jpg";
import { Text, Title } from "../common/typography";

export default function Header() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute z-10 flex h-full w-full items-center justify-center">
          <span className="flex flex-col items-center">
            <Title color={Title.color.PRIMARY} size={Title.size.EXTRA} weight={Title.weight.BOLD} uppercase>
              Staff
            </Title>
            <Title
              size={Title.size.XXXLARGE}
              color={Title.color.PRIMARY}
              weight={Title.weight.BOLD}
              align={Title.align.CENTER}
              uppercase
            >
              <span className="outline-blue">Du club</span>
            </Title>
          </span>
        </div>

        <Image src={Field} alt="" className="h-full w-full object-cover opacity-60" />
      </div>

      <div className=" bg-primary">
        <div className="max-w-container ajust-y">
          <div className="z-30 flex flex-col items-center justify-center gap-3 xl:flex-row">
            <div className="relative max-h-[35rem] max-w-[30rem] overflow-hidden xl:max-h-[51rem] ">
              <span className="absolute flex h-full w-full flex-col justify-end gap-2 pr-10 pb-10 pl-5">
                <Title color={Title.color.WHITE} size={Title.size.XXLARGE} weight={Title.weight.BOLD} uppercase>
                  Président
                </Title>
                <Text color={Text.color.WHITE} size={Text.size.XXLARGE} weight={Text.weight.LIGHT} uppercase>
                  François Clavel
                </Text>
                <Text color={Text.color.WHITE} size={Text.size.LARGE} weight={Text.weight.LIGHT}>
                  Président fondateur de l'Inter de Montréal, François est un passionné de football qui souhaite
                  dynamiser et innover dans le domaine du football au Québec. L'Inter de Montréal c'est son bébé, pour
                  lui c'est un club mais aussi une marque qui doit rayonner à l'international. La création de Ligue
                  Canadienne en vue de la coupe du monde 2026 a été l'élément déclencheur de la création du club
                </Text>
              </span>
              <Image src={Clavel} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="relative max-h-[35rem] overflow-hidden xl:max-h-[51rem] ">
              <span className="absolute flex h-full w-full flex-col justify-end gap-2 pr-10 pb-10 pl-5 ">
                <Title color={Title.color.WHITE} size={Title.size.XXLARGE} weight={Title.weight.BOLD} uppercase>
                  DIRECTEUR SPORTIF ET ENTRAINEUR
                </Title>
                <Text color={Text.color.WHITE} size={Text.size.XXLARGE} weight={Text.weight.LIGHT} uppercase>
                  Benoît Berthier
                </Text>
                <Text color={Text.color.WHITE} size={Text.size.LARGE} weight={Text.weight.LIGHT}>
                  Inter Montréal n’en serait pas là aujourd’hui sans lui. Il dirige la direction sportive du club,
                  surveille notre stratégie de jeu et nous conseille sur la meilleure approche à adopter. Son objectif
                  est de bâtir une équipe compétitive, de joueurs motivés dans une ambiance bienveillante et fun!
                </Text>
              </span>
              <Image src={Berthier} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="relative max-h-[35rem] overflow-hidden xl:max-h-[51rem]">
              <span className="absolute flex h-full w-full flex-col justify-end gap-2 pr-10 pb-10 pl-5">
                <Title color={Title.color.WHITE} size={Title.size.XXLARGE} weight={Title.weight.BOLD} uppercase>
                  DIRECTEUR COMMUNICATION ET FINANCE
                </Title>
                <Text color={Text.color.WHITE} size={Text.size.XXLARGE} weight={Text.weight.LIGHT} uppercase>
                  RAPHAËL ISCAR
                </Text>
                <Text color={Text.color.WHITE} size={Text.size.LARGE} weight={Text.weight.LIGHT}>
                  Raphaël vient apporter son expérience en stratégie de communication digitale pour donner une image
                  innovante au club de l’Inter. Il est aussi en charge de s’assurer de la bonne santé financière du club
                  afin de pouvoir vous permettre de bénéficier d’évènements spéciaux, et d’équipement de première
                  qualité.
                </Text>
              </span>
              <Image src={Iscar} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
