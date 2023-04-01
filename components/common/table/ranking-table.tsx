import classNames from "classnames";
import { Text } from "../typography";
const header = [
  {
    item: "Club",
    id: 0,
  },
  {
    item: "Points",
    id: 1,
  },
  {
    item: "MJ",
    id: 2,
  },
  {
    item: "V",
    id: 3,
  },
  {
    item: "N",
    id: 4,
  },
  {
    item: "D",
    id: 5,
  },
  {
    item: "BP",
    id: 6,
  },
  {
    item: "BC",
    id: 7,
  },
  {
    item: "EB",
    id: 8,
  },
];

const clubs = [
  {
    name: "AS Monaco",
    image: "/img/layout/as-monaco.png",
    id: 1,
    results: [12, 4, 4, 0, 0, 6, 7, 8],
  },
  {
    name: "Inter Montreal",
    image: "/img/layout/inter-logo.webp",
    id: 2,
    results: [9, 4, 3, 0, 1, 6, 7, 8],
  },
  {
    name: "Voltigeurs Châteaubriant",
    image: "/img/layout/voltigeurs.png",
    id: 3,
    results: [6, 4, 2, 0, 2, 6, 7, 8],
  },

  {
    name: "FC Nantes",
    image: "/img/layout/fc-nantes.png",
    id: 4,
    results: [3, 4, 1, 0, 3, 6, 7, 8],
  },
  {
    name: "Liverpool",
    image: "/img/layout/liverpool.png",
    id: 5,
    results: [1, 4, 0, 0, 4, 6, 7, 8],
  },
  {
    name: "Real Madrid",
    image: "/img/layout/real-madrid.png",
    id: 6,
    results: [1, 4, 0, 0, 4, 6, 7, 8],
  },
  {
    name: "Real Madrid",
    image: "/img/layout/real-madrid.png",
    id: 7,
    results: [1, 4, 0, 0, 4, 6, 7, 8],
  },
  // More clubs...
];

export default function RankingTable() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-primary">
                <tr>
                  {header.map((el) => (
                    <th scope="col" className={classNames(el.id == 0 ? "text-left" : "text-center", "py-3.5 px-3")}>
                      <Text size={Text.size.SMALL} weight={Text.weight.SEMIBOLD} color={Text.color.WHITE}>
                        {el.item}
                      </Text>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {clubs.map((club) => (
                  <tr key={club.id} className={club.id == 2 ? "bg-red" : club.id % 2 == 0 ? "bg-white" : "bg-gray"}>
                    <td className="py-4 pl-4 pr-3 sm:pl-3">
                      <div className="flex items-center">
                        <div className="mx-3">
                          <Text size={Text.size.SMALL} weight={Text.weight.SEMIBOLD} color={Text.color.DARK}>
                            {club.id}
                          </Text>
                        </div>
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-full w-full object-contain" src={club.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <Text size={Text.size.SMALL} weight={Text.weight.SEMIBOLD} color={Text.color.DARK}>
                            {club.name}
                          </Text>
                        </div>
                      </div>
                    </td>
                    {club.results?.map((el) => (
                      <td className="text-center">
                        <Text size={Text.size.SMALL} weight={Text.weight.BOLD} color={Text.color.DARK}>
                          {el}
                        </Text>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
