import Image from "next/image";
import Fabbro from "../../assets/layout/fabbro.png";
import { Title } from "./typography";
export default function Footer(props: any) {
  return (
    <footer>
      <div className="ajust-y flex flex-col items-center justify-center text-primary">
        <h1 className={props.arialFont}>Nos Sponsors</h1>
        <Image src={Fabbro} width="550" height="337" alt="sponsor" className="w-[150px] sm:w-[212px]" />
      </div>

      <div className="flex flex-col gap-y-5 text-white">
        <div className="bg-primary">
          <div className="banner max-w-container">
            <div className="flex gap-x-5">
              <props.Fb size={25} />
              <props.Insta size={30} />
            </div>
            <Title size={Title.size.XXLARGE} uppercase>
              Inter Montréal
            </Title>
          </div>
        </div>
        <div className="bg-primary">
          <div className="banner max-w-container">
            <div className="flex flex-col gap-y-2">
              <span className="font-bold">Contactez-nous</span>
              <span className={props.poppinsFont}>intermontreal@gmail.com</span>
              <span className={props.poppinsFont}>(1) 514 514 5140</span>
            </div>
            <Image src={props.logo} width="250" height="251" alt="logo" className="w-[80px] sm:w-[125px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
