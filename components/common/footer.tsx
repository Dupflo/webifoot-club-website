import { Archivo_Black, Poppins } from "@next/font/google";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Text, Title } from "./typography";

const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function Footer({ data }: any) {
  return (
    <footer>
      <div className="ajust-y flex flex-col items-center justify-center text-primary">
        <h1 className={archivoBlack.className}>Nos Sponsors</h1>
        <Image src={data.sponsor} width="550" height="337" alt="sponsor" className="w-[150px] sm:w-[212px]" />
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="flex items-center bg-primary ">
          <div className="banner max-w-container">
            <div className="flex gap-x-5 text-white">
              <FaFacebookF className="h-6 w-6" />
              <FaInstagram className="h-6 w-6" />
            </div>
            <Title size={Title.size.XXLARGE} color={Title.color.WHITE} uppercase>
              Inter Montréal
            </Title>
          </div>
        </div>
        <div className="bg-primary">
          <div className="banner max-w-container">
            <Text size={Text.size.SMALL} color={Text.color.WHITE}>
              <span className="flex flex-col gap-y-2">
                <span className="font-bold">Contactez-nous</span>
                <span className={poppins.className}>intermontreal@gmail.com</span>
                <span className={poppins.className}>(1) 514 514 5140</span>
              </span>
            </Text>
            <Image src={data.logo} width="250" height="251" alt="logo" className="w-[80px] sm:w-[125px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
