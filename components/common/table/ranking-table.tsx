"use client"
import classNames from "classnames";
import { Text } from "../typography";

export default function RankingTable({data} : any) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-primary">
                <tr>
                  {data.header.map((el : any) => (
                    <th scope="col" className={classNames(el.id == 0 ? "text-left" : "text-center", "py-3.5 px-3")}>
                      <Text size={Text.size.SMALL} weight={Text.weight.SEMIBOLD} color={Text.color.WHITE}>
                        {el.item}
                      </Text>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.clubs.map((club : any) => (
                  <tr key={club.id} className={club.id == 2 ? "bg-red" : club.id % 2 == 0 ? "bg-white" : "bg-gray"}>
                    <td className="py-4 pl-4 pr-3 sm:pl-3">
                      <div className="flex items-center">
                        <div className="mx-3">
                          <Text size={Text.size.SMALL} weight={Text.weight.SEMIBOLD} color={Text.color.DARK}>
                            {club.id}
                          </Text>
                        </div>
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-full w-full object-contain" src={club.logo} alt="" />
                        </div>
                        <div className="ml-4">
                          <Text size={Text.size.SMALL} weight={Text.weight.SEMIBOLD} color={Text.color.DARK}>
                            {club.name}
                          </Text>
                        </div>
                      </div>
                    </td>
                    {club.results.map((el : any) => (
                      <td className="text-center">
                        <Text size={Text.size.SMALL} weight={Text.weight.BOLD} color={Text.color.DARK}>
                          {el.value}
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
