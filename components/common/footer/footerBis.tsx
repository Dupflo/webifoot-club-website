import { Archivo_Black } from "@next/font/google";
import Image from "next/image";
import { Title } from "../typography";

const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });

export default function FooterFirst({ data }: any) {
  return (
    <footer>
      <div className="ajust-y flex flex-col items-center justify-center text-primary">
        <Title></Title>
        <h1 className={archivoBlack.className}>{data.footer.title}</h1>
        <div className="flex flex-col gap-x-32 gap-y-12 pt-10 lg:flex-row">
          {data.footer.sponsors.map((sponsor : any) => (
            <Image key={sponsor.id} src={sponsor.image} width="550" height="337" alt="sponsor" className="w-[150px] sm:w-[212px]" />
          ))}
        </div>
      </div>

      <div className="h-[25vh] w-full bg-black"></div>
    </footer>
  );
}
