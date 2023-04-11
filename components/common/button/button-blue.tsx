import { Text } from "../typography";

export default function ButtonBlue({ data, link }: any) {
  return (
    <button className="w-fit cursor-pointer rounded-xl bg-primary py-3 px-6 duration-100 ease-in hover:bg-red">
      <a href={link}>
        <Text size={Text.size.NORMAL} color={Text.color.WHITE}>
          {data}
        </Text>
      </a>
    </button>
  );
}
