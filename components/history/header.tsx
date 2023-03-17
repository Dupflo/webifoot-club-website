import Image from "next/image";
import Tribune from "../../assets/history/tribune.jpg";

export default function Header() {
  return (
    <div>
      <Image src={Tribune} alt="" className="h-full w-full object-cover" />
    </div>
  );
}
