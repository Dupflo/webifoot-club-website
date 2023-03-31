import classNames from "classnames";
import Result from "../result";
import { Text } from "../typography";

const date = [
  { month: "Oct", id: 0, selected: false },
  { month: "Nov", id: 1, selected: true },
  { month: "Déc", id: 2, selected: false },
  { month: "Jan", id: 3, selected: false },
  { month: "Fév", id: 4, selected: false },
  { month: "Mar", id: 5, selected: false },
];

const matchs = [
  {
    local: "FC Nantes",
    logoLocal: "/img/layout/fc-nantes.png",
    localGoal: 3,
    visit: "Inter Montreal",
    logoVisit: "/img/layout/inter-logo.webp",
    visitGoal: 1,
    id: 0,
    day: "Vendredi 24 Novembre",
    time: "16h30",
    stadium: "Stade de la Beaujoire",
  },
  {
    local: "Voltigeurs Châteaubriant",
    logoLocal: "/img/layout/voltigeurs.png",
    localGoal: 2,
    visit: "AS Monaco",
    logoVisit: "/img/layout/as-monaco.png",
    visitGoal: 4,
    id: 1,
    day: "Jeudi 23 Novembre",
    time: "20h00",
    stadium: "Stade de la Ville en Bois",
  },
];

export default function CalendarTable() {
  return (
    <div className="py-10 sm:px-10">
      <div className=" overflow-x-auto bg-primary pt-3 pl-10 md:pl-40">
        <div className="flex gap-x-10">
          {date.map((el) => (
            <span className={classNames(el.selected ? "border-b-4 border-white" : null, "pb-3")}>
              <a href="">
                <Text
                  size={Text.size.NORMAL}
                  weight={el.selected ? Text.weight.SEMIBOLD : Text.weight.NORMAL}
                  color={Text.color.WHITE}
                >
                  {el.month}
                </Text>
              </a>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2 py-2">
        {matchs.map((match) => (
          <Result key={match.id} data={match} />
        ))}
      </div>
    </div>
  );
}
