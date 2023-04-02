import classNames from "classnames";
import { Text } from "../typography";
const pages = [
  { number: "1", selected: false },
  { number: "2", selected: true },
  { number: "3", selected: false },
  { number: null, selected: false },
  { number: "8", selected: false },
  { number: "9", selected: false },
  { number: "10", selected: false },
];

export default function Pagination() {
  return (
    <nav className="flex justify-between py-10">
      <div className="flex cursor-pointer items-center rounded-md border-2 py-2 px-4 duration-100 ease-in hover:bg-gray-50">
        <Text size={Text.size.NORMAL}>Précédent</Text>
      </div>
      <div className="hidden gap-x-2 md:flex">
        {pages.map((page) => (
          <div
            className={classNames(
              page.selected ? "border-4 border-primary" : "",
              "cursor-pointer rounded-md border-2 py-2 px-4 duration-100 ease-in hover:bg-gray-50"
            )}
          >
            <Text size={Text.size.NORMAL}>{page.number == null ? "..." : page.number}</Text>
          </div>
        ))}
      </div>
      <div className="flex cursor-pointer items-center rounded-md border-2 py-2 px-4 duration-100 ease-in hover:bg-gray-50">
        <Text size={Text.size.NORMAL}>Suivant</Text>
      </div>
    </nav>
  );
}
