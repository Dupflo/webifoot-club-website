import { Text } from "../typography";

export default function ButtonBlue({ data, link }: any) {
  return (
    <button className="w-fit cursor-pointer rounded-2xl bg-primary p-4 duration-100 ease-in hover:bg-black">
      <a href={link}>
        <Text size={Text.size.NORMAL} color={Text.color.WHITE}>
          {data}
        </Text>
      </a>
    </button>
  );
}
